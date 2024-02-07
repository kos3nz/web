/** @jsxImportSource solid-js */

import cx from "clsx"
import { For, onMount, Show } from "solid-js"

import { navItems } from "@/config/navigation-items"
import { createNavigationMarker } from "@/hooks/solid/create-navigation-marker"

export default function Navigation(props: { pathname: string }) {
  const currentPath = () => {
    if (props.pathname.includes("/posts/")) return "/posts/"
    if (props.pathname.includes("/snippets/")) return "/snippets/"
    return props.pathname
  }

  const { position, handleOnMount, handleOnMouseEnter, handleOnMouseLeave } =
    createNavigationMarker()

  return (
    <ul class="relative flex items-center gap-x-4">
      <For each={navItems}>
        {(item) => {
          const isActive = currentPath() === item.path
          let ref: HTMLLIElement | undefined

          onMount(() => {
            handleOnMount(ref, isActive)
          })

          return (
            <li
              ref={ref}
              class="relative"
              onMouseEnter={() => {
                handleOnMouseEnter(ref, isActive)
              }}
              onMouseLeave={() => {
                handleOnMouseLeave(isActive)
              }}
            >
              <a
                href={item.path}
                class={cx([
                  "relative z-10 flex cursor-pointer items-center gap-x-1 rounded-md px-1.5 py-1.5 text-sm",
                  isActive
                    ? "text-slate-200"
                    : "text-slate-400 transition-colors duration-300 hover:text-slate-200",
                ])}
              >
                {/* <item.Icon /> */}
                <span class="capitalize">{item.label}</span>
              </a>
              <Show when={isActive}>
                <div
                  class={cx(
                    "@/layout",
                    "pointer-events-none absolute bottom-0 left-0 hidden h-[1.5px] w-full origin-left rounded-sm bg-cyan-500 transition-transform duration-300 lg:block",
                  )}
                  style={{
                    transform: `
                    translateX(${position().translateX}px)
                    scaleX(${position().scaleX})`,
                  }}
                />
              </Show>
            </li>
          )
        }}
      </For>
    </ul>
  )
}
