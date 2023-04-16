/** @jsxImportSource solid-js */

import cx from 'clsx'
import { createSignal } from 'solid-js'

export default function Drawer() {
  const [open, setOpen] = createSignal(false)

  return (
    <button
      class="space-y-[4px] p-2"
      onClick={() => {
        setOpen((state) => !state)
      }}
    >
      <span
        class={cx(
          'block h-[2px] w-5 rounded-md bg-current duration-300',
          open() ? 'translate-y-1.5 -rotate-[135deg]' : '',
        )}
      />
      <span
        class={cx(
          'block h-[2px] w-3.5 rounded-md bg-current',
          open() ? 'opacity-0 duration-100' : 'duration-700',
        )}
      />
      <span
        class={cx(
          'block h-[2px] rounded-md bg-current duration-300',
          open() ? 'w-5 -translate-y-1.5 rotate-[135deg]' : 'w-2',
        )}
      />
    </button>
  )
}
