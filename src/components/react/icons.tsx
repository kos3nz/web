/** @jsxImportSource react */

import { motion } from "framer-motion"
import type { ComponentProps } from "react"

import { cn } from "@/utils/helpers"

export function CheckMotion({ className, ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
      {...rest}
      className={cn("size-5", className)}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

export function ChevronRight({ className, ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      {...rest}
      className={cn("size-5", className)}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
}

export function Loader({ className, ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
      className={cn("size-5 animate-rotate", className)}
    >
      <line x1="12" x2="12" y1="2" y2="6" className="opacity-[1]" />
      <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" className="opacity-[0.92]" />
      <line x1="18" x2="22" y1="12" y2="12" className="opacity-[0.84]" />
      <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" className="opacity-[0.76]" />
      <line x1="12" x2="12" y1="18" y2="22" className="opacity-[0.68]" />
      <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" className="opacity-[0.6]" />
      <line x1="2" x2="6" y1="12" y2="12" className="opacity-[0.52]" />
      <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" className="opacity-[0.44]" />
    </svg>
  )
}

export const Icons = {
  chevronRight: ChevronRight,
  loader: Loader,
  animate: {
    check: CheckMotion,
  },
}
