/** @jsxImportSource react */

import cx from 'clsx'
import { stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export default function TextAnimation() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    async function sequence() {
      await animate([
        [
          '.box',
          { scaleX: [0, 1] },
          { duration: 0.5, type: 'spring', bounce: 0.1, delay: 0.5 },
        ],
        [
          '.text',
          { y: [100, 0] },
          {
            delay: stagger(0.05),
            duration: 0.4,
            type: 'spring',
            bounce: 0.1,
            at: 0.8,
          },
        ],
        [
          '.box',
          { scaleY: [1, 0.01] },
          { duration: 0.4, type: 'spring', bounce: 0.1, delay: 0.2 },
        ],
        [
          '.text',
          { opacity: [1, 0] },
          {
            duration: 0.001,
          },
        ],
      ])
    }

    sequence()
  }, [animate])
  return (
    <div ref={scope} className="relative flex justify-center overflow-hidden">
      <div
        className={cx(
          'box flex w-fit scale-x-0 gap-x-4 bg-slate-200 p-2 text-5xl font-bold text-slate-800',
        )}
      >
        <div className="flex">
          <span className="text block translate-y-full">H</span>
          <span className="text block translate-y-full">e</span>
          <span className="text block translate-y-full">l</span>
          <span className="text block translate-y-full">l</span>
          <span className="text block translate-y-full">o</span>
          <span className="text block translate-y-full">,</span>
        </div>
        <div className="flex">
          <span className="text block translate-y-full">W</span>
          <span className="text block translate-y-full">o</span>
          <span className="text block translate-y-full">r</span>
          <span className="text block translate-y-full">l</span>
          <span className="text block translate-y-full">d</span>
        </div>
      </div>
    </div>
  )
}
