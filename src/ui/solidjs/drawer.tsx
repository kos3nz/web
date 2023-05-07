/** @jsxImportSource solid-js */

import { useStore } from '@nanostores/solid'
import cx from 'clsx'
import { isDrawerOpen, openDrawer } from 'store/drawer-store.ts'

export default function Drawer() {
  const $isDrawerOpen = useStore(isDrawerOpen)

  return (
    <button id="drawer-trigger" class="space-y-[4px] p-1" onClick={openDrawer}>
      <span
        class={cx(
          'block h-[2px] w-5 rounded-md bg-current duration-300',
          $isDrawerOpen() ? 'translate-y-1.5 -rotate-[135deg]' : '',
        )}
      />
      <span
        class={cx(
          'block h-[2px] w-3.5 rounded-md bg-current',
          $isDrawerOpen() ? 'opacity-0 duration-100' : 'duration-700',
        )}
      />
      <span
        class={cx(
          'block h-[2px] rounded-md bg-current duration-300',
          $isDrawerOpen() ? 'w-5 -translate-y-1.5 rotate-[135deg]' : 'w-2',
        )}
      />
    </button>
  )
}
