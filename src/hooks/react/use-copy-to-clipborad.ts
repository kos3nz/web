import { useState, useRef, useCallback } from "react"

export const useCopyToClipboard = (text?: string, options?: { duration?: number }) => {
  const ref = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  const onCopy = useCallback(() => {
    setCopied(true)

    if (text) {
      navigator.clipboard.writeText(text)
    } else if (ref.current?.textContent) {
      navigator.clipboard.writeText(ref.current.textContent)
    }

    setTimeout(() => {
      setCopied(false)
    }, options?.duration || 2000)
  }, [text, options?.duration])

  return { copied, onCopy, ref: ref }
}
