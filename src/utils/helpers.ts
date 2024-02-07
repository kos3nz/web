/* eslint-disable @typescript-eslint/no-explicit-any */

import cx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge TailwindCSS classes without style conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs))
}

/**
 * Get the value between min and max
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

/**
 * Wait specific time
 */
export function sleep(wait: number) {
  return new Promise((resolve) => setTimeout(resolve, wait))
}

/**
 * Given an interval and a function returns a new function
 * that will only call the source function if interval milliseconds
 * have passed since the last invocation
 */
export const throttle = <TArgs extends any[]>(
  {
    interval,
    leading = true,
    trailing = false,
  }: { interval: number; leading?: boolean; trailing?: boolean },
  func: (...args: TArgs) => any,
): ((...args: TArgs) => any) => {
  let ready = true
  const throttled = (...args: TArgs) => {
    if (!ready) return

    if (leading) func(...args)
    ready = false

    setTimeout(() => {
      if (trailing) func(...args)
      ready = true
    }, interval)
  }
  return throttled as unknown as (...args: TArgs) => any
}
