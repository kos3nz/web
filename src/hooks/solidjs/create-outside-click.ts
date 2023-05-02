import { onCleanup, onMount } from 'solid-js'

// TODO: create jsdoc
/**
 *
 */
export const createOutsideClick = <T extends HTMLElement>(
  elements: (T | string | undefined)[],
  cb: (event: MouseEvent) => void,
) => {
  const handleClick = (event: MouseEvent) => {
    const isInsideElement = elements.some((value) => {
      if (!value) return

      if (typeof value === 'string') {
        const element = document.querySelector(value)

        return element?.contains(event.target as Node)
      } else {
        return value.contains(event.target as Node)
      }
    })

    // When clicking the inside of the elements, do nothing
    if (isInsideElement) return

    // When clicking the outside, trigger callback function
    cb(event)
  }

  onMount(() => {
    document.addEventListener('mousedown', handleClick)

    onCleanup(() => {
      document.removeEventListener('mousedown', handleClick)
    })
  })
}
