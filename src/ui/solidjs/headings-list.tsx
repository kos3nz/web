/** @jsxImportSource solid-js */

import { Motion, Presence } from '@motionone/solid'
import cx from 'clsx'
import { For, Show, createSignal, onMount } from 'solid-js'

import { createActiveHeading } from 'hooks/solidjs/create-active-heading'
import { createOutsideClick } from 'hooks/solidjs/create-outside-click'
import type { Heading } from 'types/global'
import ListIcon from 'ui/solidjs/icons/list-icon.tsx'

export default function HeadingsList(props: { headings: Heading[] }) {
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
    <div class="relative flex w-full justify-end px-6 text-sm md:text-base">
      <button
        ref={buttonRef}
        type="button"
        class={cx(
          'flex min-w-0 items-center rounded-lg border border-slate-200/20 bg-slate-800 px-4 py-2',
          activeHeading() && 'gap-x-1.5',
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span class="min-w-0">
          <Show when={activeHeading()}>
            <div class="truncate">{activeHeading()?.text}</div>
          </Show>
        </span>
        <span class={cx('shrink-0', activeHeading() && 'text-slate-500')}>
          <ListIcon />
        </span>
      </button>

      {/* Headings List */}
      <div ref={listRef}>
        <Presence>
          <Show when={open()}>
            <Motion.ul
              class="absolute bottom-14 right-6 z-50 divide-y divide-slate-400/20 rounded-lg border border-slate-200/20 bg-slate-800 text-center md:right-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <For each={props.headings}>
                {(heading) => (
                  <li>
                    <a
                      href={heading.hash}
                      class={cx(
                        'block p-4 transition-colors duration-300 hover:bg-cyan-200/5',
                        activeHeading()?.hash === heading.hash
                          ? 'text-cyan-500'
                          : 'text-slate-200',
                      )}
                    >
                      {heading.text}
                    </a>
                  </li>
                )}
              </For>
            </Motion.ul>
          </Show>
        </Presence>
      </div>
    </div>
  )
}
