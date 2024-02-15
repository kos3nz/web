/** @jsxImportSource solid-js */

import { cn } from "@/utils/helpers"

import { createNavigationMenuModal } from "./modals/navigation-menu-modal"

export default function NavigationMobile() {
  const { showNavigationMenu, setShowNavigationMenu, NavigationMenuModal } =
    createNavigationMenuModal()

  return (
    <>
      <button
        id="drawer-trigger"
        class="group/drawer-trigger flex flex-col items-end gap-y-1 p-1"
        onClick={() => {
          setShowNavigationMenu(!showNavigationMenu())
        }}
      >
        <span
          class={cn(
            "block h-[2px] w-5 rounded-md bg-current duration-300",
            showNavigationMenu()
              ? "translate-y-1.5 rotate-[-135deg]"
              : "origin-right group-hover/drawer-trigger:scale-x-50",
          )}
        />
        <span
          class={cn(
            "block h-[2px] w-3.5 rounded-md bg-current",
            showNavigationMenu()
              ? "opacity-0 duration-100"
              : "origin-right duration-300 group-hover/drawer-trigger:scale-x-[1.4]",
          )}
        />
        <span
          class={cn(
            "block h-[2px] rounded-md bg-current duration-300",
            showNavigationMenu()
              ? "w-5 -translate-y-1.5 rotate-[135deg]"
              : "w-2 origin-right group-hover/drawer-trigger:scale-x-[1.75]",
          )}
        />
      </button>
      <NavigationMenuModal />
    </>
  )
}
