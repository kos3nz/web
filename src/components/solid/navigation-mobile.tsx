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
        class="group/drawer-trigger -mr-1.5 size-8 space-y-1"
        onClick={() => {
          setShowNavigationMenu(!showNavigationMenu())
        }}
      >
        <span
          class={cn(
            "ml-auto mr-1.5 block h-[2px] w-5 rounded-md bg-current duration-200",
            showNavigationMenu()
              ? "translate-x-0.5 translate-y-1.5 rotate-[45deg]"
              : "origin-right group-hover/drawer-trigger:scale-x-50",
          )}
        />
        <span
          class={cn(
            "ml-auto mr-1.5 block h-[2px] w-3.5 rounded-md bg-current duration-100",
            showNavigationMenu()
              ? "opacity-0"
              : "origin-right group-hover/drawer-trigger:scale-x-[1.4]",
          )}
        />
        <span
          class={cn(
            "ml-auto mr-1.5 block h-[2px] rounded-md bg-current duration-200",
            showNavigationMenu()
              ? "w-5 -translate-y-1.5 translate-x-0.5 rotate-[135deg]"
              : "w-2 origin-right group-hover/drawer-trigger:scale-x-[1.75]",
          )}
        />
      </button>
      <NavigationMenuModal />
    </>
  )
}
