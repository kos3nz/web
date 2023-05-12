/** @jsxImportSource solid-js */

import cx from 'clsx'
import { For } from 'solid-js'
import type { Heading } from 'types/global.types.ts'

export default function TableOfContents(props: {
  headings: Heading[]
  activeHeading: Heading | undefined
}) {
  return (
    <div class="max-w-md rounded-xl border border-slate-400/20 p-6 lg:border-0">
      <span class="block text-xs font-bold uppercase text-slate-300">
        On this page
      </span>
      <ol class="mt-3 border-l-2 border-slate-400/20 text-sm font-semibold">
        <For each={props.headings}>
          {(heading) => (
            <li class="leading-2 relative mt-3 first-of-type:mt-0">
              <a
                href={heading.hash}
                class={cx(
                  'block leading-5 transition-colors duration-300',
                  (heading.depth === 1 || heading.depth === 2) && 'pl-4',
                  heading.depth >= 3 && 'pl-8',
                  props.activeHeading?.hash === heading.hash
                    ? 'text-slate-100'
                    : 'text-slate-500 hover:text-slate-100',
                )}
              >
                {heading.text}
              </a>
              <span
                class="absolute left-[-2px] top-0 h-full w-[2px] origin-center bg-cyan-500 transition-transform duration-300"
                style={{
                  transform:
                    props.activeHeading?.hash === heading.hash
                      ? 'scaleY(1)'
                      : 'scaleY(0)',
                }}
              />
            </li>
          )}
        </For>
      </ol>
    </div>
  )
}
