/** @jsxImportSource solid-js */

const formatter = new Intl.DateTimeFormat('ja-Jpan-JP', {
  dateStyle: 'short',
})

export default function DateTime(props: { dateTime: Date }) {
  return (
    <time
      dateTime={props.dateTime.toISOString()}
      class="whitespace-nowrap text-sm tracking-wide text-slate-400"
    >
      {formatter.format(props.dateTime).split('/').join('-')}
    </time>
  )
}
