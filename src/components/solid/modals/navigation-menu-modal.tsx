/** @jsxImportSource solid-js */

import { Accessor, createEffect, createSignal, For, on, Setter } from "solid-js"

import { navItems } from "@/config/navigation-items"

import { Dialog, DialogContent, DialogOverlay } from "../ui/dialog"

type NavigationMenuModalProps = {
  showNavigationMenu: Accessor<boolean>
  setShowNavigationMenu: Setter<boolean>
}

function NavigationMenuModal({
  showNavigationMenu,
  setShowNavigationMenu,
}: NavigationMenuModalProps) {
  return (
    <Dialog open={showNavigationMenu()} onOpenChange={setShowNavigationMenu}>
      <DialogOverlay
        onClick={() => setShowNavigationMenu(false)}
        class="top-header animate-duration-200"
      />
      <DialogContent
        onPointerDownOutside={(e) => e.preventDefault()}
        disableStyles
        class="group fixed left-0 top-header z-50 grid w-full gap-4 border-b border-muted bg-background p-6 shadow-lg animate-duration-200 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out data-[expanded]:fade-in-0"
      >
        <ul class="divide-y divide-muted py-8 animate-duration-200 group-[[data-expanded]]:animate-in group-[[data-closed]]:animate-out group-[[data-closed]]:slide-out-to-right-2 group-[[data-expanded]]:slide-in-from-right-2">
          <For each={navItems}>
            {(item) => (
              <li class="mb-px last-of-type:mb-0">
                <a
                  href={item.path}
                  class={
                    "block py-4 capitalize text-link transition-colors hover:bg-muted/20"
                  }
                >
                  {item.label}
                </a>
              </li>
            )}
          </For>
        </ul>
      </DialogContent>
    </Dialog>
  )
}

export function createNavigationMenuModal() {
  const [showNavigationMenu, setShowNavigationMenu] = createSignal(false)

  const NavigationMenuModalCallback = () => {
    return (
      <NavigationMenuModal
        showNavigationMenu={showNavigationMenu}
        setShowNavigationMenu={setShowNavigationMenu}
      />
    )
  }

  // This is a temporary workaround to prevent @kobalte from adding the 'pointer-events: none' style attribute to the body, which causes other components to become unclickable. Also I removed unnecessary padding to the right.
  // https://github.com/kobaltedev/kobalte/issues/335
  createEffect(
    on(
      showNavigationMenu,
      (c) => {
        if (c) {
          requestAnimationFrame(() => {
            document.body.setAttribute("style", "overflow: hidden")
          })
        }
      },
      { defer: true },
    ),
  )

  return {
    showNavigationMenu,
    setShowNavigationMenu,
    NavigationMenuModal: NavigationMenuModalCallback,
  }
}
