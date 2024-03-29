/** @jsxImportSource react */

import { useStore } from "@nanostores/react"
import { motion } from "framer-motion"

import { Icons } from "@/components/react/icons"
import { $step } from "@/stores/contact.store"

export default function Steps() {
  const step = useStore($step)

  return (
    <div className="flex rounded p-4">
      <Step step={1} currentStep={step} />
      <Step step={2} currentStep={step} />
      <Step step={3} currentStep={step} lastIndex />
    </div>
  )
}

function Step({
  step,
  currentStep,
  lastIndex,
}: {
  step: number
  currentStep: number
  lastIndex?: boolean
}) {
  const status =
    currentStep === step ? "active" : currentStep < step ? "inactive" : "complete"

  return (
    <motion.div animate={status} className={`flex items-center`}>
      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "#475569",
            transition: { duration: 0 },
          },
          active: {
            backgroundColor: "#06b6d4",
            transition: {
              delay: 0.6,
              duration: 0.3,
            },
          },
          complete: {
            backgroundColor: "#06b6d4",
          },
        }}
        className="relative z-10 flex size-4 items-center justify-center rounded-full font-semibold md:size-5"
      >
        <div className="flex items-center justify-center">
          {status === "complete" ? (
            <Icons.animate.check className="size-3 text-slate-300 md:size-4" />
          ) : null}
        </div>
      </motion.div>
      {!lastIndex && (
        <div className="relative h-1 w-8 md:w-12">
          <span className="absolute -left-1 top-0 h-1 w-10 bg-slate-600 md:w-14" />

          {status === "complete" ? (
            <motion.span
              className="absolute -left-1 top-0 h-1 w-10 origin-left bg-cyan-500 md:w-14"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
            />
          ) : null}
        </div>
      )}
    </motion.div>
  )
}
