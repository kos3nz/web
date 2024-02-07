/** @jsxImportSource solid-js */

import type { JSXElement } from "solid-js"

import { cn } from "@/utils/helpers"

export default function Tag(props: {
  children: JSXElement
  active?: boolean
  clickable?: boolean
}) {
  return (
    <span
      class={cn(
        "rounded-lg px-2.5 py-1.5 text-xs font-bold underline-offset-2 transition-colors",
        props.active ? "bg-cyan-900/50 text-cyan-300" : "bg-slate-700/50 text-slate-300",
        props.clickable && "cursor-pointer hover:underline",
      )}
    >
      {props.children}
    </span>
  )
}
