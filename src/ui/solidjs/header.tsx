/** @jsxImportSource solid-js */

import cx from 'clsx'
import { createScrollDirection } from '@hooks/solidjs/create-scroll-direction'
import type { JSXElement } from 'solid-js'

export default function Header(props: { children: JSXElement }) {
  const bounds = 100
  const direction = createScrollDirection(bounds)

  return (
    <div
      class={cx(
        'fixed left-1/2 top-4 z-50 w-full max-w-6xl translate-x-[-50%] px-6 transition-transform duration-1000 ease-in-out',
        direction() === 'down'
          ? '-translate-y-[calc(100%+24px)]'
          : 'translate-y-0',
      )}
    >
      <header class="flex w-full items-center justify-between rounded-xl bg-slate-800/90 px-6 py-3 backdrop-blur-sm [@supports(backdrop-filter:blur(0px))]:bg-slate-100/5">
        {props.children}
      </header>
    </div>
  )
}