/** @jsxImportSource solid-js */

import cx from 'clsx'
import { For } from 'solid-js'
import { createActiveHeading } from 'hooks/solidjs/create-active-heading.ts'
import type { Heading } from 'types/global.d.ts'

export default function TableOfContents(props: { headings: Heading[] }) {
  // eslint-disable-next-line solid/reactivity
  const activeHeading = createActiveHeading(props.headings)

  return (
    <div class="rounded-xl border border-slate-400/20 p-6 text-sm">
      <span class="block font-bold text-slate-300">Table of Contents</span>
      <ol class="mt-3 border-l-2 border-slate-400/20 font-semibold">
        <For each={props.headings}>
          {(heading) => (
            <li class="leading-2 relative mt-3 first-of-type:mt-0">
              <a
                href={heading.hash}
                class={cx(
                  'block leading-5 transition-colors duration-300',
                  (heading.depth === 1 || heading.depth === 2) && 'pl-3',
                  heading.depth === 3 && 'pl-6',
                  heading.depth === 4 && 'pl-9',
                  activeHeading()?.hash === heading.hash
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
                    activeHeading()?.hash === heading.hash
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
