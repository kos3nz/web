/* eslint-disable react-hooks/rules-of-hooks */

import { useStore } from "@nanostores/solid"
import { atom } from "nanostores"
import { createEffect, onCleanup } from "solid-js"

export const $device = atom<"mobile" | "tablet" | "desktop" | null>(null)

export const $dimensions = atom<{
  width: number
  height: number
}>({ width: 0, height: 0 })

export default function createMediaQuery() {
  const device = useStore($device)
  const dimensions = useStore($dimensions)

  createEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        $device.set("mobile")
      } else if (
        window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches
      ) {
        $device.set("tablet")
      } else {
        $device.set("desktop")
      }
      $dimensions.set({ width: window.innerWidth, height: window.innerHeight })
    }

    // Initial detection
    checkDevice()

    // Listener for windows resize
    window.addEventListener("resize", checkDevice)

    // Cleanup listener
    onCleanup(() => {
      window.removeEventListener("resize", checkDevice)
    })
  })

  return {
    device,
    dimensions,
  }
}
