import { RefObject, useEffect } from "react"

export const useOutsideClick = <T extends HTMLElement>(
  elements: (RefObject<T> | string)[],
  cb: (event: MouseEvent) => void,
) => {
  const handleOnClick = (event: MouseEvent) => {
    const isInsideElement = elements.some((value) => {
      if (!value) return

      if (typeof value === "string") {
        const element = document.querySelector(value)

        return element?.contains(event.target as Node)
      } else {
        return value.current?.contains(event.target as Node)
      }
    })

    // When clicking the inside of the elements, do nothing
    if (isInsideElement) return

    // When clicking the outside, trigger callback function
    cb(event)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOnClick)

    return () => document.removeEventListener("mousedown", handleOnClick)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
