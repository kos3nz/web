/** @jsxImportSource solid-js */

export default function tag(props: { name: string }) {
  return (
    <span
      class={
        'rounded-full border border-slate-400/50 px-2 py-px text-xs text-slate-400 md:text-sm'
      }
    >
      {props.name}
    </span>
  )
}
