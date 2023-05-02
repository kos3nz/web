/** @jsxImportSource solid-js */

export default function tag({ name }: { name: string }) {
  return (
    <span class="rounded-full border border-slate-400/50 px-2 py-px text-xs capitalize text-slate-400">
      {name}
    </span>
  )
}
