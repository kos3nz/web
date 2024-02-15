/** @jsxImportSource solid-js */

import { For, onMount, Show } from "solid-js"

import { navItems } from "@/config/navigation-items"
import createMediaQuery from "@/hooks/solid/create-media-query"
import { createNavigationMarker } from "@/hooks/solid/create-navigation-marker"
import { cn } from "@/utils/helpers"

export default function NavigationDesktop(props: { pathname: string }) {
  const currentPath = () => {
    if (props.pathname.includes("/posts/")) return "/posts/"
    if (props.pathname.includes("/snippets/")) return "/snippets/"
    return props.pathname
  }

  const { position, handleOnMount, handleOnMouseEnter, handleOnMouseLeave } =
    createNavigationMarker()
  const { device } = createMediaQuery()

  return (
    <ul class="relative flex items-center">
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
              class={cn("relative h-8")}
              onMouseEnter={() => {
                handleOnMouseEnter(ref, isActive)
              }}
              onMouseLeave={() => {
                handleOnMouseLeave(isActive)
              }}
            >
              <a
                href={item.path}
                class={cn(
                  "relative z-10 flex h-full items-center px-4 text-sm",
                  isActive
                    ? "text-active"
                    : "text-inactive transition-colors hover:text-active",
                )}
              >
                {/* <item.Icon /> */}
                <span class="capitalize">{item.label}</span>
              </a>
              <Show when={isActive}>
                <div
                  class={cn(
                    "pointer-events-none absolute inset-0 origin-left rounded-full bg-muted transition-all duration-300",
                  )}
                  style={{
                    width:
                      device() === "desktop" && position().width > 0
                        ? `${position().width}px`
                        : undefined,
                    transform:
                      device() === "desktop"
                        ? `translateX(${position().translateX}px)`
                        : undefined,
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
