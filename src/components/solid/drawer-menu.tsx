/** @jsxImportSource solid-js */

import { useStore } from "@nanostores/solid"
import { For, onMount } from "solid-js"
import { navItems } from "src/config/navigation-items"

import { createOutsideClick } from "@/hooks/solid/create-outside-click"
import { closeDrawer, isDrawerOpen } from "@/store/drawer-store.ts"
import { cn } from "@/utils/helpers"

export default function DrawerMenu(props: { pathname: string }) {
  const currentPath = () => {
    if (props.pathname.includes("/blog/")) return "/blog/"
    if (props.pathname.includes("/snippets/")) return "/snippets/"
    return props.pathname
  }

  let drawerMenuRef: HTMLDivElement | undefined
  const $isDrawerOpen = useStore(isDrawerOpen)

  onMount(() => {
    createOutsideClick([drawerMenuRef], closeDrawer)
  })

  return (
    <>
      <div
        class={cn(
          "fixed inset-0 z-[99] bg-slate-900/50",
          $isDrawerOpen() ? "visible" : "invisible",
        )}
      />
      <div
        ref={drawerMenuRef}
        class={cn(
          "fixed bottom-0 left-0 z-[100] w-full overflow-hidden transition-transform duration-300 ease-in-out",
          $isDrawerOpen() ? "translate-y-0" : "translate-y-[100%]",
        )}
      >
        <span class="absolute left-1/2 top-4 h-1 w-8 -translate-x-1/2 rounded-full bg-slate-400" />

        <ul class="divide-y divide-slate-400/20 rounded-t-3xl bg-slate-800 px-8 pb-4 pt-8">
          <For each={navItems}>
            {(item) => (
              <li>
                <a
                  href={item.path}
                  class={cn("group flex w-full justify-start px-3 py-6")}
                >
                  <div
                    class={cn(
                      "flex items-center gap-x-1.5 text-sm font-semibold transition-colors duration-300",
                      currentPath() === item.path
                        ? "border-b-2 border-cyan-400"
                        : "text-slate-400 group-hover:text-slate-300",
                    )}
                  >
                    <span>{item.label}</span>
                  </div>
                </a>
              </li>
            )}
          </For>
        </ul>
      </div>
    </>
  )
}