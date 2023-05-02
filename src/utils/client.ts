/**
 * Get the vertical offset position from the top of the viewport
 */
export const getOffsetTop = () => {
  return Math.max(window.scrollY, document.documentElement.scrollTop)
}

/**
 * Get the vertical offset position from the bottom of the viewport
 */
export const getOffsetBottom = () => {
  return (
    Math.max(window.scrollY, document.documentElement.scrollTop) +
    window.innerHeight
  )
}

/**
 * Validate the passed argument is Node type
 */
export function isNode(value: unknown): value is Node {
  return value instanceof Node
}
