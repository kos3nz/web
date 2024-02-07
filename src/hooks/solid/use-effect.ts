import { createEffect, onCleanup } from "solid-js"
// import { isDefined, isFunction } from '../utils';

export function useEffect(callback: () => unknown): void {
  createEffect(() => {
    if (isDefined(callback) && isFunction(callback)) {
      const cleanup = callback()
      if (isFunction(cleanup)) {
        onCleanup(() => {
          cleanup()
        })
      }
    }
  })
}

export function isDefined<T>(value: T): value is T {
  return typeof value !== "undefined" && value !== null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isFunction(value: unknown): value is (...args: any[]) => any {
  return typeof value === "function"
}

export const isBrowser = typeof window !== "undefined"
