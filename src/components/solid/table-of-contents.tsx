/** @jsxImportSource solid-js */

import { For } from "solid-js"

import type { Heading } from "@/types/global.types.ts"
import { cn } from "@/utils/helpers"

export default function TableOfContents(props: {
  headings: Heading[]
  activeHeading: Heading | undefined
  cb?: () => void
}) {
  return (
    <div class="rounded-xl p-5">
      <ol class="border-l-2 border-muted-foreground/20 text-[13px] font-medium">
        <For each={props.headings}>
          {(heading) => (
            <li class="leading-2 relative mt-3 first-of-type:mt-0">
              <a
                href={heading.hash}
                class={cn(
                  "block py-px leading-5 transition-colors duration-300",
                  (heading.depth === 1 || heading.depth === 2) && "pl-4",
                  heading.depth >= 3 && "pl-8",
                  props.activeHeading?.hash === heading.hash
                    ? "text-active"
                    : "text-inactive hover:text-active",
                )}
                onClick={() => props.cb?.()}
              >
                {heading.text}
              </a>
              <span
                class="absolute left-[-2px] top-0 h-full w-[2px] origin-center bg-primary transition-transform duration-300"
                style={{
                  transform:
                    props.activeHeading?.hash === heading.hash
                      ? "scaleY(1)"
                      : "scaleY(0)",
                }}
              />
            </li>
          )}
        </For>
      </ol>
    </div>
  )
}
