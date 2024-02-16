/** @jsxImportSource solid-js */

import { animate } from "framer-motion/dom"
import { createSignal, onMount, Setter, Show } from "solid-js"

import { cn } from "@/utils/helpers"

import { Icons } from "../icons"

export default function CopyToClipboard(props: { text?: string }) {
  const [copied, setCopied] = createSignal(false)

  return (
    <button
      aria-label="Copy to clipboard"
      title="Copy to clipboard"
      class="group rounded-lg bg-[#222436] p-3 outline-none backdrop-blur-sm transition-opacity focus-visible:ring-1 focus-visible:ring-primary lg:opacity-0 lg:focus-visible:opacity-100 lg:group-hover/pre:opacity-100 [@supports(backdrop-filter:blur(0px))]:bg-[#222436]/50"
      onClick={() => {
        navigator.clipboard.writeText(props.text || "")
        setCopied(true)
      }}
    >
      <Show
        when={copied()}
        fallback={
          <Icons.copy class="size-5 text-inactive transition duration-300 animate-in fade-in group-hover:text-active" />
        }
      >
        <MotionCopyIcon setCopied={setCopied} />
      </Show>
    </button>
  )
}

function MotionCopyIcon(props: { setCopied: Setter<boolean> }) {
  onMount(() => {
    animate([
      ["path.check-icon", { pathLength: [0, 1] }, { duration: 0.2, ease: "easeIn" }],
      [
        "path.check-icon",
        { opacity: [1, 0] },
        { duration: 0.3, ease: "easeIn", delay: 1.2 },
      ],
    ])

    setTimeout(() => {
      props.setCopied(false)
    }, 1500)
  })

  return <Icons.check class={cn("size-5 text-accent")} />
}
