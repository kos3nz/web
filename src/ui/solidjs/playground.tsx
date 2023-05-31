/** @jsxImportSource solid-js */

import type { JSXElement } from 'solid-js'
import { cn } from 'utils/helpers'

export default function Playground(props: {
  class?: string
  aspectRatio?: string
  overflow?: string
  children: JSXElement
}) {
  return (
    <div
      class={cn(
        'bg-[image:radial-gradient(circle_at_1px_1px,_#1e283b_1px,_transparent_0)] bg-[size:20px_20px] bg-[position:8px_8px]',
        'relative rounded-xl border border-slate-400/20',
        'overflow-hidden',
        'aspect-[1/1] sm:aspect-[4/3] md:aspect-[10/6]',
        props.class,
      )}
    >
      {props.children}
    </div>
  )
}
