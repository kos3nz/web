/** @jsxImportSource react */

import cx from "clsx"
import { stagger, useAnimate } from "framer-motion"
import { useCallback, useState } from "react"

import { sleep } from "@/utils/helpers"

import FullScreen from "./full-screen"
import MiniCards from "./mini-cards"
import ScheduleLinks from "./schedule-links"

export default function ClickAnimation() {
  const [show, setShow] = useState(false)
  const [scope, animate] = useAnimate()

  const animateStart = useCallback(async () => {
    animate([
      [
        ".full-screen",
        {
          scale: 1,
          opacity: 1,
        },
        {
          delay: 0.25,
          duration: 0.6,
          ease: "easeIn",
        },
      ],
      [
        ".date-card.top",
        {
          y: 150,
          scale: 0,
          opacity: 0,
        },
        {
          type: "spring",
          bounce: 0.3,
          delay: stagger(0.3),
          at: "<",
        },
      ],
      [
        ".date-card.middle",
        {
          scale: 0,
          opacity: 0,
        },
        {
          type: "spring",
          bounce: 0.3,
          at: 0.1,
          delay: stagger(0.15),
        },
      ],
      [
        ".date-card.bottom",
        {
          y: -150,
          scale: 0,
          opacity: 0,
        },
        {
          type: "spring",
          bounce: 0.3,
          at: 0.2,
          delay: stagger(0.05),
        },
      ],
      [
        ".gradient",
        { scale: 0, opacity: 0 },
        {
          at: 0.15,
          duration: 0.4,
        },
      ],
    ])

    await sleep(300)

    setShow(true)
  }, [animate])

  const animateBack = useCallback(async () => {
    setShow(false)

    animate(
      ".full-screen",
      {
        scale: 0.95,
        opacity: 0,
      },
      {
        duration: 0.6,
        ease: "easeOut",
      },
    )

    await sleep(300)

    animate([
      [
        ".date-card.top",
        {
          y: 0,
          scale: 1,
          opacity: 1,
        },
        {
          type: "spring",
          bounce: 0.3,
          delay: stagger(0.3),
          at: "<",
        },
      ],
      [
        ".date-card.middle",
        {
          scale: 1,
          opacity: 1,
        },
        {
          type: "spring",
          bounce: 0.3,
          at: 0.1,
          delay: stagger(0.15),
        },
      ],
      [
        ".date-card.bottom",
        {
          y: 0,
          scale: 1,
          opacity: 1,
        },
        {
          type: "spring",
          bounce: 0.3,
          at: 0.2,
          delay: stagger(0.05),
        },
      ],
      [
        ".gradient",
        { scale: 1, opacity: 1 },
        {
          at: 0.1,
          duration: 0.4,
        },
      ],
    ])
  }, [animate])

  return (
    <div ref={scope} className="flex size-full items-center justify-center">
      <div className="relative z-10 aspect-square w-[460px] shrink-0 scale-[0.6] md:scale-90 lg:scale-100">
        {/* Gradient Background */}
        <div
          className={cx(
            "gradient",
            "absolute inset-0 origin-bottom-left rounded-3xl bg-gradient-to-br from-[#f7fff5] via-[#ffe5c6] via-40% to-[#ffd8ad] to-80%",
          )}
        />

        {/* Scheduling Links */}
        <ScheduleLinks show={show} />

        {/* Date cards */}
        <MiniCards />

        {/* Animate Button */}
        <button
          type="button"
          className="absolute bottom-4 right-4 hidden rounded-xl bg-black px-4 py-1 font-medium lg:block"
          onClick={animateStart}
        >
          Animate me
        </button>
      </div>

      {/* Full Screen */}
      <FullScreen show={show} animateBack={animateBack} />
    </div>
  )
}
