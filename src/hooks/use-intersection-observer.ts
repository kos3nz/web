import type { RefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

type IntersectionObserverOptions = IntersectionObserverInit & {
  freezeOnceIntersecting?: boolean
}

const defaultOptions: IntersectionObserverOptions = {
  root: null, // Viewport is root element when the value is null,
  rootMargin: '0px 0px 0px 0px', // Viewport without margin
  threshold: 0, // Observer callback will be executed when root-margin hits the top of the element
  freezeOnceIntersecting: false,
}

export function useIntersectionObserver<TElement>(
  options?: IntersectionObserverOptions,
  callback?: () => void,
): [RefObject<TElement>, boolean] {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const [isIntersecting, setIsIntersecting] = useState(false)
  const containerRef = useRef<TElement>(null)
  const frozen = isIntersecting && options?.freezeOnceIntersecting

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
      if (containerRef.current) observer.disconnect()
    }
  }, [])

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