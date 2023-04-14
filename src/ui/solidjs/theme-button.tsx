/** @jsxImportSource solid-js */

import { createSignal } from 'solid-js'

export default function ThemeButton() {
  const [angle, setAngle] = createSignal(0)

  return (
    <button
      type="button"
      class="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full duration-200 hover:opacity-50"
      onClick={() => setAngle(angle() - 180)}
    >
      <div
        class="absolute top-1 space-y-5 duration-500"
        style={{ transform: `rotate(${angle()}deg)` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="4" />
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6 rotate-180"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg>
      </div>
    </button>
  )
}
