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
        "flex h-5 items-center justify-center rounded-full px-2.5 text-xs font-bold underline-offset-1 transition-colors",
        props.active
          ? "bg-primary/50 text-primary-foreground"
          : "bg-muted text-muted-foreground hover:bg-primary/50 hover:text-primary-foreground ",
        props.clickable && "cursor-pointer",
      )}
    >
      {props.children}
    </span>
  )
}
