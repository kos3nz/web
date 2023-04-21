/** @jsxImportSource react */

import MotionLogo from '@ui/react/motion-logo'

export default function Profile() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-xl border border-slate-600 px-10 py-8 md:flex-row md:gap-8">
      <div className="box flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-slate-500">
        <MotionLogo />
      </div>
      <div className="h-px w-full bg-slate-600 md:h-full md:w-px" />

      <div className="flex max-w-lg items-center">
        元ビール醸造士。独学でプログラミング学び、現在はWebエンジニアとして活動しています。好きな技術はReact,
        Typescript, Next.js, Remix, SolidJSなど。
      </div>
    </div>
  )
}
