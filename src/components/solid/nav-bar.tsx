/** @jsxImportSource solid-js */

import type { JSXElement } from "solid-js"

// import { createScrollDirection } from "@/hooks/solid/create-scroll-direction"
import { cn } from "@/utils/helpers"

export default function Navbar(props: { children: JSXElement }) {
  // const { scrollDirection } = createScrollDirection()

  return (
    <header
      // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
      class={cn(
        "z-50 flex h-header w-full items-center border-b bg-background backdrop-blur transition-transform duration-500 ease-in-out md:sticky md:left-0 md:top-0 [@supports(backdrop-filter:blur(0px))]:bg-background/90",
        // scrollDirection() === "down"
        //   ? "-translate-y-header md:translate-y-0"
        //   : "translate-y-0",
      )}
    >
      <div class="container flex items-center justify-between">{props.children}</div>
    </header>
  )
}
