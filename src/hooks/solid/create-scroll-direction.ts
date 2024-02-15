/* eslint-disable react-hooks/rules-of-hooks */

import { useStore } from "@nanostores/solid"
import { atom } from "nanostores"
import { createSignal, onCleanup, onMount } from "solid-js"

// import { $scrollDirection } from "@/stores/scroll.store"
import { getOffsetTop } from "@/utils/client"
import { throttle } from "@/utils/helpers"

export const $scrollDirection = atom<"up" | "down">("up")

export const createScrollDirection = (bounds = 100) => {
  const scrollDirection = useStore($scrollDirection)
  const [scrollY, setScrollY] = createSignal(0)
  const [scrollYBounded, setScrollYBounded] = createSignal(0)

  const handleThrottledScroll = throttle(
    { interval: 100, trailing: true, leading: false },
    // eslint-disable-next-line solid/reactivity
    () => {
      const previous = scrollY()
      const current = getOffsetTop()
      const diff = current - previous

      setScrollYBounded(scrollYBounded() + diff)

      if (scrollYBounded() > bounds) $scrollDirection.set("down")
      if (diff < 0) {
        $scrollDirection.set("up")
        setScrollYBounded(0)
      }

      setScrollY(current)
    },
  )

  const handleHashChange = () => {
    console.log("changed")
  }

  onMount(() => {
    setScrollY(getOffsetTop())

    console.log(location.hash)

    window.addEventListener("scroll", handleThrottledScroll)
    window.addEventListener("hashchange", handleHashChange)

    onCleanup(() => {
      window.removeEventListener("scroll", handleThrottledScroll)
      window.removeEventListener("hashchange", handleHashChange)
    })
  })

  return { scrollDirection, scrollY }
}
