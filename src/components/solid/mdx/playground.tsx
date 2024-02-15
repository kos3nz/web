/** @jsxImportSource solid-js */

import type { JSXElement } from "solid-js"

import { cn } from "@/utils/helpers"

export default function Playground(props: {
  class?: string
  aspectRatio?: string
  overflow?: string
  children: JSXElement
}) {
  return (
    <div
      class={cn(
        "relative rounded-md border",
        "bg-grid",
        "overflow-hidden",
        "aspect-[1/1] sm:aspect-[4/3] md:aspect-[10/6]",
        props.class,
      )}
    >
      {props.children}
    </div>
  )
}
