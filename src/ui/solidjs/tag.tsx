/** @jsxImportSource solid-js */

export default function tag(props: { name: string }) {
  return (
    <span class={'text-sm text-slate-400 md:text-base'}>
      <span class="text-cyan-500">#</span>
      {props.name}
    </span>
  )
}
