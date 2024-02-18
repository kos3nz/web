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
        class="group/drawer-trigger -mr-1.5 flex size-8 flex-col items-center justify-center gap-y-1"
        onClick={() => {
          setShowNavigationMenu(!showNavigationMenu())
        }}
      >
        <span
          class={cn(
            "ml-auto mr-1.5 block h-[2px] w-5 origin-right rounded-md bg-current transition-all",
            showNavigationMenu()
              ? "translate-x-[-3px] translate-y-3.5 rotate-[45deg]"
              : "group-hover/drawer-trigger:scale-x-50",
          )}
        />
        <span
          class={cn(
            "ml-auto mr-1.5 block h-[2px] w-3.5 origin-right rounded-md bg-current transition-all",
            showNavigationMenu()
              ? "opacity-0"
              : "group-hover/drawer-trigger:scale-x-[1.4]",
          )}
        />
        <span
          class={cn(
            "ml-auto mr-1.5 block h-[2px] origin-right rounded-md bg-current transition-all",
            showNavigationMenu()
              ? "w-5 translate-x-[-17px] translate-y-0.5 rotate-[135deg]"
              : "w-2 group-hover/drawer-trigger:scale-x-[1.75]",
          )}
        />
      </button>
      <NavigationMenuModal />
    </>
  )
}
