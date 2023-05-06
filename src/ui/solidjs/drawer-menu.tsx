/** @jsxImportSource solid-js */

import { useStore } from '@nanostores/solid'
import cx from 'clsx'
import { For, onMount } from 'solid-js'
import { createOutsideClick } from 'hooks/solidjs/create-outside-click'
import { navItems } from 'src/const/navigation-items'
import { isDrawerOpen } from 'store/drawer-store.ts'

export default function DrawerMenu(props: { pathname: string }) {
  const currentPath = () => {
    if (props.pathname.includes('/blog/')) return '/blog/'
    if (props.pathname.includes('/snippets/')) return '/snippets/'
    return props.pathname
  }

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
          'fixed bottom-0 left-0 z-[100] w-full overflow-hidden transition-transform duration-300 ease-in-out',
          $isDrawerOpen() ? 'translate-y-0' : 'translate-y-[100%]',
        )}
      >
        <span class="absolute left-1/2 top-4 h-1 w-8 -translate-x-1/2 rounded-full bg-slate-400" />

        <ul class="divide-y divide-slate-400/20 rounded-t-3xl bg-slate-800 px-8 pb-4 pt-8">
          <For each={navItems}>
            {(item) => (
              <li>
                <a
                  href={item.path}
                  class={cx('group flex w-full justify-start px-3 py-6')}
                >
                  <div
                    class={cx(
                      'flex items-center gap-x-1.5 text-sm font-semibold transition-colors duration-300',
                      currentPath() === item.path
                        ? 'border-b-2 border-cyan-400'
                        : 'text-slate-400 group-hover:text-slate-100',
                    )}
                  >
                    <span class="shrink-0">
                      <item.Icon />
                    </span>
                    <span>{item.label}</span>
                  </div>
                </a>
              </li>
            )}
          </For>
        </ul>
      </div>
    </>
  )
}
