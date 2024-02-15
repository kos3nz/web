/** @jsxImportSource react */

import { useStore } from "@nanostores/react"

import { $step } from "@/stores/contact.store"

export default function SuccessMessage() {
  const step = useStore($step)

  return (
    <div
      className="mt-8 h-96 w-full rounded-md border bg-muted/30"
      aria-hidden={step !== 3}
    >
      <div className="flex h-full items-center justify-center">
        <div className="space-y-4 text-center">
          <p className="text-4xl font-bold text-heading">Thank you! 🎉</p>
          <p className="text-sm">
            お問い合わせ、誠にありがとうございます。土、日、祝日を除き、1-2日以内に返信致します。
          </p>
        </div>
      </div>
    </div>
  )
}
