/** @jsxImportSource solid-js */

import MotionLogo from 'ui/solidjs/motion-logo'

export default function Profile() {
  return (
    <div class="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 rounded-xl border border-slate-400/20 px-10 py-8 md:flex-row md:gap-8">
      <div class="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-slate-400/20">
        <MotionLogo width={20} height={45} />
      </div>

      <span class="h-px w-full bg-slate-400/20 md:h-24 md:w-px" />

      <div class="flex max-w-lg items-center">
        元ビール醸造士。独学でプログラミング学び、現在はWebエンジニアとして活動しています。好きな技術はReact,
        Typescript, Next.js, Remix, SolidJSなど。
      </div>
    </div>
  )
}
