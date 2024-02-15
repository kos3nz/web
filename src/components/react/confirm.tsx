/** @jsxImportSource react */

import { useStore } from "@nanostores/react"
import axios from "axios"
import { FormEventHandler, useEffect, useRef, useState } from "react"

import {
  $contactInfo,
  $step,
  decreaseStep,
  increaseStep,
} from "@/stores/contact.store.ts"
import type { ContactSchema } from "@/types/validation.types.ts"
import { cn } from "@/utils/helpers.ts"

import { Icons } from "./icons.tsx"
import { Button } from "./ui/button.tsx"

type Status = {
  submitted: boolean
  submitting: boolean
  info: { error: boolean; message: string | null }
}

export default function Confirm() {
  const step = useStore($step)
  const [status, setStatus] = useState<Status>({
    submitted: false,
    submitting: false,
    info: { error: false, message: null },
  })
  const ref = useRef<HTMLButtonElement>(null)
  const controller = new AbortController()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => controller.abort(), [])

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }))
    axios({
      method: "POST",
      url: "https://formspree.io/f/xlekzqrz",
      data: $contactInfo.get(),
      signal: controller.signal,
    })
      .then(() => {
        handleServerResponse(true)
      })
      .catch((error) => {
        console.log(error)
        handleServerResponse(false)
      })
  }

  const handleServerResponse = (ok: boolean) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, message: "" },
      })
      increaseStep()
    } else {
      setStatus((prevStatus) => ({
        ...prevStatus,
        info: {
          error: true,
          message: "正常に動作しませんでした。後でもう一度お試しください。",
        },
      }))
    }
  }

  return (
    <div className="w-full" aria-hidden={step !== 2}>
      <div className="space-y-5 text-[15px]">
        <div className="flex flex-col gap-x-4 gap-y-5 md:flex-row">
          <ConfirmItem label="お名前" name="name" />
          <ConfirmItem label="会社名" name="companyName" />
        </div>
        <ConfirmItem label="メールアドレス" name="email" />
        <ConfirmItem label="電話番号" name="phoneNumber" />
        <ConfirmItem label="お問い合わせ内容" name="message" />
      </div>
      <p className="mb-5 mt-10 text-center text-sm">
        上記の内容をご確認の上、送信ボタンを押してください。
      </p>
      <div className="flex flex-col-reverse justify-center gap-4 md:flex-row">
        <Button
          ref={ref}
          type="button"
          variant={"outline"}
          className="w-full md:w-fit"
          onClick={decreaseStep}
          disabled={status.submitting}
        >
          Back
        </Button>

        <form onSubmit={handleOnSubmit}>
          <Button type="submit" className="w-full md:w-fit" disabled={status.submitting}>
            {status.submitting ? <Icons.loader /> : "Send"}
          </Button>
        </form>
      </div>
    </div>
  )
}

function ConfirmItem({ label, name }: { label: string; name: keyof ContactSchema }) {
  const contactInfo = useStore($contactInfo)
  const info: string | JSX.Element | JSX.Element[] = contactInfo[name] || <>&nbsp;</>

  return (
    <div className="w-full space-y-2">
      <span className="text-xs font-semibold">{label}</span>
      <p
        className={cn(
          "rounded-md border bg-muted/30 px-3 py-2.5",
          name === "message" && "whitespace-pre font-sans leading-relaxed",
        )}
      >
        {info}
      </p>
    </div>
  )
}
