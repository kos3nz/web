import { transform } from 'framer-motion/dom'
import { createEffect, createSignal, onCleanup } from 'solid-js'
import { getViewportTop } from 'utils/client'
import { clamp } from 'utils/helpers'

export const createBoundedScroll = (bounds = 150) => {
  const [scrollY, setScrollY] = createSignal(0)
  const [scrollYBounded, setScrollYBounded] = createSignal(0)
  const [scrollYBoundedProgress, setScrollYBoundedProgress] = createSignal(0)

  const handleScroll = () => {
    const previous = scrollY()
    const current = getViewportTop()
    const diff = current - previous
    const newScrollYBounded = scrollYBounded() + diff

    setScrollYBounded(clamp(newScrollYBounded, 0, bounds))

    setScrollY(current)
  }

  createEffect(() => {
    const newScrollYBoundedProgress = transform(
      scrollYBounded(),
      [0, bounds],
      [0, 1],
    )

    setScrollYBoundedProgress(newScrollYBoundedProgress)
  })

  createEffect(() => {
    setScrollY(getViewportTop())

    window.addEventListener('scroll', handleScroll)
    console.log('The scroll event attached')

    onCleanup(() => {
      window.removeEventListener('scroll', handleScroll)
      // console.log('The scroll event removed')
    })
  })

  return { scrollYBounded, scrollYBoundedProgress }
}
