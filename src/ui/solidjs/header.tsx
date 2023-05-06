/** @jsxImportSource solid-js */

import cx from 'clsx'
import { createScrollDirection } from 'hooks/solidjs/create-scroll-direction'
import type { JSXElement } from 'solid-js'

export default function Header(props: { children: JSXElement }) {
  const bounds = 200
  const direction = createScrollDirection(bounds)

  return (
    <header
      class={cx(
        'flex w-full items-center justify-between gap-x-6 rounded-xl border border-slate-400/20 bg-slate-900 px-4 py-2 backdrop-blur-sm transition-transform duration-500 ease-in-out md:px-6 md:py-2 [@supports(backdrop-filter:blur(0px))]:bg-slate-900/80',
        direction() === 'down'
          ? '-translate-y-[calc(100%+12px)]'
          : 'translate-y-0',
      )}
    >
      {props.children}
    </header>
  )
}
