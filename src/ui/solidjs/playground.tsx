/** @jsxImportSource solid-js */

import type { JSXElement } from 'solid-js'

export default function Playground(props: {
  class: string
  children: JSXElement
}) {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div class="relative overflow-hidden rounded-xl border border-slate-400/20 bg-slate-950 bg-[image:radial-gradient(circle_at_1px_1px,_#1e283b_1px,_transparent_0)] bg-[size:16px_16px] bg-[position:5px_5px]">
      <div class="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20" />

      <div class={'relative ' + props.class}>{props.children}</div>
    </div>
  )
}
