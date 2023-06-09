import { createEffect, createSignal, onCleanup } from 'solid-js'
import { getOffsetTop } from 'utils/client'
import { throttle } from 'utils/helpers'

export const createScrollDirection = (bounds = 100) => {
  const [direction, setDirection] = createSignal<'up' | 'down'>('up')
  const [scrollY, setScrollY] = createSignal(0)
  const [scrollYBounded, setScrollYBounded] = createSignal(0)

  const handleOnThrottledScroll = throttle(
    { interval: 100, trailing: true, leading: false },
    () => {
      const previous = scrollY()
      const current = getOffsetTop()
      const diff = current - previous

      setScrollYBounded(scrollYBounded() + diff)

      if (scrollYBounded() > bounds) setDirection('down')
      if (diff < 0) {
        setDirection('up')
        setScrollYBounded(0)
      }

      setScrollY(current)
    },
  )

  createEffect(() => {
    setScrollY(getOffsetTop())

    window.addEventListener('scroll', handleOnThrottledScroll)
    // console.log('The scroll event attached')

    onCleanup(() => {
      window.removeEventListener('scroll', handleOnThrottledScroll)
      // console.log('The scroll event removed')
    })
  })

  return direction
}
