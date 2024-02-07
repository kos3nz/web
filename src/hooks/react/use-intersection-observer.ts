/** @jsxImportSource react */

import { useEffect, useRef, useState, type RefObject } from "react"

type IntersectionObserverOptions = IntersectionObserverInit & {
  once?: boolean
}

const defaultOptions: IntersectionObserverOptions = {
  root: null, // Viewport is root element when the value is null,
  rootMargin: "0px 0px 0px 0px", // Viewport without margin
  threshold: 0, // Observer callback will be executed when root-margin hits the top of the element
  once: false,
}

export function useIntersectionObserver<TElement>(
  options?: IntersectionObserverOptions,
  callback?: () => void,
): [RefObject<TElement>, boolean] {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const [isIntersecting, setIsIntersecting] = useState(false)
  const containerRef = useRef<TElement>(null)
  const frozen = isIntersecting && options?.once

  useEffect(() => {
    const hasSupport = !!window.IntersectionObserver

    if (!hasSupport) return

    const { root, rootMargin, threshold } = { ...defaultOptions, ...options }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry)
      },
      { root, rootMargin, threshold } as IntersectionObserverInit,
    )

    observer.observe(containerRef.current as Element)

    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options?.root])

  useEffect(() => {
    if (!entry || frozen) return

    setIsIntersecting(entry.isIntersecting)

    if (entry.isIntersecting && callback) callback()

    return () => {
      setEntry(undefined)
    }
  }, [entry, frozen, callback])

  return [containerRef, isIntersecting]
}
