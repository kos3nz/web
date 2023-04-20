/**
 * Get the vertical position of the top of the viewport
 */
export const getViewportTop = () => {
  return Math.max(window.scrollY, document.documentElement.scrollTop)
}
