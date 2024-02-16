/** @jsxImportSource solid-js */

import { Motion, Presence } from "@motionone/solid"
// import { useStore } from "@nanostores/solid"
import { createSignal, onMount, Show } from "solid-js"

import TableOfContents from "@/components/solid/table-of-contents.tsx"
import { createActiveHeading } from "@/hooks/solid/create-active-heading"
import { createOutsideClick } from "@/hooks/solid/create-outside-click"
// import { $scrollDirection } from "@/hooks/solid/create-scroll-direction.ts"
import type { Heading } from "@/types/global.types.ts"
import { cn } from "@/utils/helpers.ts"

import { Icons } from "./icons.tsx"

export default function TocMobile(props: { headings: Heading[] }) {
  // const scrollDirection = useStore($scrollDirection)
  // eslint-disable-next-line solid/reactivity
  const activeHeading = createActiveHeading(props.headings)

  const [open, setOpen] = createSignal(false)
  const [outsideClick, setOutsideClick] = createSignal(false)
  let listRef: HTMLDivElement | undefined
  let buttonRef: HTMLButtonElement | undefined

  onMount(() => {
    createOutsideClick([listRef, buttonRef], () => {
      setOutsideClick(true)
      setOpen(false)

      setTimeout(() => {
        setOutsideClick(false)
      }, 300)
    })
  })

  return (
    <div
      class={cn(
        "sticky left-0 top-0 z-10 w-full border-b bg-background backdrop-blur transition-transform duration-500 ease-in-out md:hidden [@supports(backdrop-filter:blur(0px))]:bg-background/90",
        // scrollDirection() === "down"
        //   ? "-translate-y-header md:translate-y-0"
        //   : "translate-y-0",
      )}
    >
      <div class="px-6">
        <button
          ref={buttonRef}
          type="button"
          class={cn("flex items-center gap-x-2 py-3 text-sm")}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span class={cn("flex shrink-0 items-center gap-x-1 font-medium")}>
            On this page
            <Icons.chevronRight class="size-3.5" />
          </span>

          <Show when={activeHeading()}>
            <span class="min-w-0">
              {/* specifying max-width to prevent layout shift */}
              <div class="max-w-[calc(100vw-102px-24px*2)] truncate text-left font-medium text-heading">
                {activeHeading()?.text}
              </div>
            </span>
          </Show>
        </button>

        {/* Headings List */}
        <div ref={listRef} class="relative">
          <Presence exitBeforeEnter>
            <Show when={open()}>
              <div class="absolute -left-1 -top-1 z-20">
                <Motion.ul
                  class="max-h-[80svh] w-[calc(100%+8px)] overflow-y-auto rounded-lg border bg-background"
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={outsideClick() ? { opacity: 0, y: -15 } : undefined}
                  transition={{ duration: 0.3 }}
                >
                  <li class="border-b">
                    <button
                      type="button"
                      class="w-full p-5 text-left text-xs font-semibold text-primary"
                      onClick={() => {
                        setOpen(false)
                        window.scrollTo({ top: 0, behavior: "instant" })
                      }}
                    >
                      Return to Top
                    </button>
                  </li>
                  <TableOfContents
                    headings={props.headings}
                    activeHeading={activeHeading()}
                    cb={() => setOpen(false)}
                  />
                </Motion.ul>
              </div>
            </Show>
          </Presence>
        </div>
      </div>
    </div>
  )
}
