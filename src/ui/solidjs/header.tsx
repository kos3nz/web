/** @jsxImportSource solid-js */

import cx from 'clsx'
import { createScrollDirection } from 'hooks/solidjs/create-scroll-direction'
import type { JSXElement } from 'solid-js'

export default function Header(props: { children: JSXElement }) {
  const bounds = 200
  const direction = createScrollDirection(bounds)

  return (
    <div
      class={cx(
        'fixed left-1/2 top-3 z-50 w-full max-w-6xl translate-x-[-50%] px-6 transition-transform duration-1000 ease-in-out',
        direction() === 'down'
          ? '-translate-y-[calc(100%+24px)]'
          : 'translate-y-0',
      )}
    >
      <header class="flex w-full items-center justify-between gap-x-6 rounded-xl border border-slate-600/50 bg-slate-800/90 px-4 py-2 backdrop-blur-sm md:px-6 md:py-2 [@supports(backdrop-filter:blur(0px))]:bg-slate-900/80">
        {props.children}
      </header>
    </div>
  )
}
