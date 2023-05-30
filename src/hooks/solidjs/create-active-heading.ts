import { createEffect, createSignal, onCleanup } from 'solid-js'
import { getOffsetBottom, getOffsetTop } from 'utils/client'
import { throttle } from 'utils/helpers'
import type { Heading } from 'types/global.types.ts'

export const createActiveHeading = (headings: Heading[]) => {
  const [activeHeading, setActiveHeading] = createSignal<Heading | undefined>(
    undefined,
  )

  const getActiveHash = () => {
    if (headings.length === 0) return

    if (getOffsetTop() <= 100) {
      return setActiveHeading(undefined)
    }

    const offset = getOffsetBottom()
    const pageHeight = document.documentElement.scrollHeight // the height of the entire page

    if (offset >= pageHeight - 10) {
      return setActiveHeading(headings.at(-1))
    }

    const hashesPos = headings
      .map((heading) => {
        const headingEl = document.getElementById(heading.hash.split('#')[1])

        if (headingEl) {
          return {
            pos:
              headingEl.getBoundingClientRect().top - window.innerHeight * 0.25, // 25% of the viewport
            heading,
          }
        }

        return { pos: 1, heading }
      })
      .filter(({ pos }) => pos < 0) // filter out positive position values

    const currentHeading = hashesPos.at(-1)

    if (currentHeading) {
      setActiveHeading(currentHeading.heading)
    } else {
      setActiveHeading(undefined)
    }
  }

  const handleOnScroll = throttle(
    { interval: 100, trailing: true, leading: false },
    getActiveHash,
  )

  createEffect(() => {
    getActiveHash()

    window.addEventListener('scroll', handleOnScroll)

    onCleanup(() => {
      window.removeEventListener('scroll', handleOnScroll)
      // console.log('The scroll event removed')
    })
  })

  return activeHeading
}
