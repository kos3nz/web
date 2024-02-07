/** @jsxImportSource solid-js */

import { Motion, Presence } from "@motionone/solid"
import cx from "clsx"
import { createSignal, onMount, Show } from "solid-js"

import { createActiveHeading } from "@/hooks/solid/create-active-heading"
import { createOutsideClick } from "@/hooks/solid/create-outside-click"
import type { Heading } from "@/types/global.types.ts"
import TableOfContents from "@/ui/solid/table-of-contents.tsx"

import { ChevronIcon, ListIcon } from "./icons.tsx"

export default function HeadingsMobile(props: { headings: Heading[] }) {
  // eslint-disable-next-line solid/reactivity
  const activeHeading = createActiveHeading(props.headings)

  const [open, setOpen] = createSignal(false)
  let listRef: HTMLDivElement | undefined
  let buttonRef: HTMLButtonElement | undefined

  onMount(() => {
    createOutsideClick([listRef, buttonRef], () => {
      setOpen(false)
    })
  })

  return (
    <div class="fixed bottom-0 left-0 z-50 w-full pb-3 md:hidden">
      <div class="relative flex w-full justify-start px-6 text-sm">
        <button
          ref={buttonRef}
          type="button"
          class={cx(
            "flex min-w-0 items-center gap-x-1.5 rounded-lg border border-slate-400/20 bg-slate-800 px-4 py-2",
          )}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span class={cx("shrink-0 text-slate-400")}>
            <ListIcon />
          </span>

          <Show when={activeHeading()}>
            <span class={cx("shrink-0 text-slate-400")}>
              <ChevronIcon />
            </span>
            <span class="min-w-0">
              <div class="truncate font-semibold text-slate-300">
                {activeHeading()?.text}
              </div>
            </span>
          </Show>
        </button>

        {/* Headings List */}
        <div ref={listRef}>
          <Presence>
            <Show when={open()}>
              <Motion.ul
                class="absolute bottom-12 left-6 z-50 mr-6 rounded-lg bg-slate-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TableOfContents
                  headings={props.headings}
                  activeHeading={activeHeading()}
                />
              </Motion.ul>
            </Show>
          </Presence>
        </div>
      </div>
    </div>
  )
}
