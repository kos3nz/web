/** @jsxImportSource react */

import { useStore } from "@nanostores/react"
import axios from "axios"
import { FormEventHandler, useEffect, useState } from "react"

import { contactInfo, decreaseStep, increaseStep, step } from "@/store/contact-store"
import type { ContactSchema } from "@/types/validation.types.ts"
import { cn } from "@/utils/helpers.ts"

import { PaperAirplaneIcon, SpinnerIcon } from "./icons.tsx"

type Status = {
  submitted: boolean
  submitting: boolean
  info: { error: boolean; message: string | null }
}

export default function Confirm() {
  const $step = useStore(step)
  const [status, setStatus] = useState<Status>({
    submitted: false,
    submitting: false,
    info: { error: false, message: null },
  })
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
      data: contactInfo.get(),
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
          message: "正常に動作しませんでした。後でもう一度やり直してください。",
        },
      }))
    }
  }

  return (
    <div className="w-full" aria-hidden={$step !== 2}>
      <div className="space-y-5 text-[15px]">
        <div className="flex flex-col gap-x-4 gap-y-5 md:flex-row">
          <ListItem label="お名前" name="name" />
          <ListItem label="会社名" name="companyName" />
        </div>
        <ListItem label="メールアドレス" name="email" />
        <ListItem label="電話番号" name="phoneNumber" />
        <ListItem label="お問い合わせ内容" name="message" />
      </div>
      <p className="mb-5 mt-10 text-center text-sm text-slate-400">
        上記の内容をご確認の上、送信ボタンを押してください。
      </p>

      <div className="flex justify-center gap-x-12">
        <button
          type="button"
          className="rounded-lg px-2 py-1 font-semibold decoration-cyan-500 decoration-2 outline-none hover:underline focus-visible:outline-cyan-500/75 disabled:text-slate-500 disabled:no-underline"
          onClick={decreaseStep}
          disabled={status.submitting}
        >
          Back
        </button>

        <form onSubmit={handleOnSubmit}>
          <button
            type="submit"
            className={cn(
              "btn gap-x-2 border-0 bg-cyan-400 text-slate-900 hover:bg-cyan-300 focus-visible:outline-cyan-500/75 disabled:bg-slate-600/50",
              status.submitting && "w-[96px]",
            )}
            disabled={status.submitting}
          >
            {status.submitting ? (
              <SpinnerIcon />
            ) : (
              <>
                Send
                <PaperAirplaneIcon className="translate-y-[-2px] -rotate-45" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

function ListItem({ label, name }: { label: string; name: keyof ContactSchema }) {
  const $contactInfo = useStore(contactInfo)

  let info: string | JSX.Element | JSX.Element[] = $contactInfo[name] || <>&nbsp;</>

  if (name === "message" && typeof info === "string") {
    info = info.split("\n").map((line, i) => (
      <span key={i} className="mb-1 block last-of-type:mb-0">
        {line}
      </span>
    ))
  }

  return (
    <div className="w-full space-y-2">
      <span className="text-xs font-semibold text-slate-300">{label}</span>
      <p
        className={cn(
          "rounded-lg bg-slate-700/50 px-4",
          name === "message" ? "py-3" : "py-2.5",
        )}
      >
        {info}
      </p>
    </div>
  )
}
