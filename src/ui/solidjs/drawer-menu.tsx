/** @jsxImportSource solid-js */

import { useStore } from '@nanostores/solid'
import cx from 'clsx'
import { createOutsideClick } from 'hooks/solidjs/create-outside-click'
import { For, onMount } from 'solid-js'
import { navItems } from 'src/const/navigation-items'

import { isDrawerOpen } from 'store/drawerStore'

export default function DrawerMenu() {
  let drawerMenuRef: HTMLDivElement | undefined
  const $isDrawerOpen = useStore(isDrawerOpen)

  onMount(() => {
    createOutsideClick([drawerMenuRef, '#drawer-handler'], () => {
      isDrawerOpen.set(false)
    })
  })

  return (
    <>
      <div
        class={cx(
          'fixed inset-0 z-[99] bg-slate-900/50',
          $isDrawerOpen() ? 'visible' : 'invisible',
        )}
      />
      <div
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ref={drawerMenuRef}
        class={cx(
          'fixed bottom-0 left-0 z-[100] w-full overflow-hidden rounded-t-2xl transition-transform duration-500 ease-in-out',
          $isDrawerOpen() ? 'translate-y-0' : 'translate-y-[100%]',
        )}
      >
        <ul class="grid grid-cols-3 gap-x-1 bg-slate-800 px-2">
          <For each={navItems}>
            {(item, i) => (
              <li
                class={cx(
                  'flex items-center justify-center',
                  i() !== 0 && 'before:text-slate-100/20 before:content-["|"]',
                )}
              >
                <a
                  href={item.path}
                  class="my-1 flex w-full items-center justify-center gap-x-1.5 rounded-md py-3 text-sm font-bold transition-colors duration-300 hover:text-cyan-500"
                >
                  <span class="shrink-0">
                    <item.Icon />
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            )}
          </For>
        </ul>
      </div>
    </>
  )
}