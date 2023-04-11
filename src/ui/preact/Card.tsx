/** @jsxImportSource preact */

import { useState } from 'preact/hooks'

export function Card() {
  const [test, setTest] = useState('foo')

  return (
    <li className="flex items-center justify-between gap-x-4 rounded-lg bg-indigo-800 p-6 text-white">
      <h2>Test</h2>
      <span>&rarr;</span>
      <p>{test}</p>
      <button
        type="button"
        onClick={() => {
          setTest((prev) => (prev === 'foo' ? 'bar' : 'foo'))
        }}
        className="rounded-lg border-2 border-white p-2"
      >
        Button
      </button>
    </li>
  )
}
