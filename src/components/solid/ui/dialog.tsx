/** @jsxImportSource solid-js */

import { Dialog as DialogPrimitive } from "@kobalte/core"
import type { ComponentProps, Ref } from "solid-js"

import { cn } from "@/utils/helpers"

import { Icons } from "../icons"

const Dialog = (
  props: ComponentProps<typeof DialogPrimitive.Root> & {
    ref?: Ref<typeof DialogPrimitive.Root>
  },
) => (
  <DialogPrimitive.Root {...props} ref={props.ref}>
    <DialogPortal>{props.children}</DialogPortal>
  </DialogPrimitive.Root>
)

const DialogPortal = DialogPrimitive.Portal

const DialogTrigger = DialogPrimitive.Trigger

const DialogClose = (
  props: ComponentProps<typeof DialogPrimitive.CloseButton> & {
    ref?: Ref<typeof DialogPrimitive.CloseButton>
    disableStyles?: boolean
  },
) => (
  <DialogPrimitive.CloseButton
    {...props}
    ref={props.ref}
    class={cn(
      !props.disableStyles &&
        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[expanded]:bg-accent data-[expanded]:text-muted-foreground",
      props.class,
    )}
  >
    <Icons.close class="size-4" />
    <span class="sr-only">Close</span>
  </DialogPrimitive.CloseButton>
)

const DialogOverlay = (
  props: ComponentProps<typeof DialogPrimitive.Overlay> & {
    ref?: Ref<typeof DialogPrimitive.Overlay>
    disableStyles?: boolean
  },
) => (
  <DialogPrimitive.Overlay
    {...props}
    ref={props.ref}
    class={cn(
      !props.disableStyles &&
        "fixed inset-0 z-50 bg-background/90 backdrop-blur-sm data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 [@supports(backdrop-filter:blur(0px))]:bg-background/80",
      props.class,
    )}
  />
)

const DialogContent = (
  props: ComponentProps<typeof DialogPrimitive.Content> & {
    ref?: Ref<typeof DialogPrimitive.Content>
    disableStyles?: boolean
  },
) => (
  <DialogPrimitive.Content
    {...props}
    ref={props.ref}
    class={cn(
      !props.disableStyles &&
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-muted bg-background p-6 shadow-lg data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 data-[closed]:slide-out-to-left-1/2 data-[closed]:slide-out-to-top-[48%] data-[expanded]:slide-in-from-left-1/2 data-[expanded]:slide-in-from-top-[48%] sm:rounded-lg",
      props.class,
    )}
  >
    {props.children}
  </DialogPrimitive.Content>
)

const DialogHeader = (
  props: ComponentProps<"div"> & {
    disableStyles?: boolean
  },
) => (
  <div
    {...props}
    class={cn(!props.disableStyles && "flex flex-col space-y-2 text-left", props.class)}
  />
)

const DialogFooter = (
  props: ComponentProps<"div"> & {
    disableStyles?: boolean
  },
) => (
  <div
    {...props}
    class={cn(
      !props.disableStyles &&
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      props.class,
    )}
  />
)

const DialogTitle = (
  props: ComponentProps<typeof DialogPrimitive.Title> & {
    ref?: Ref<typeof DialogPrimitive.Title>
    disableStyles?: boolean
  },
) => (
  <DialogPrimitive.Title
    {...props}
    ref={props.ref}
    class={cn(
      !props.disableStyles && "text-lg font-semibold leading-none tracking-tight",
      props.class,
    )}
  />
)

const DialogDescription = (
  props: ComponentProps<typeof DialogPrimitive.Description> & {
    ref?: Ref<typeof DialogPrimitive.Description>
    disableStyles?: boolean
  },
) => (
  <DialogPrimitive.Description
    {...props}
    ref={props.ref}
    class={cn(!props.disableStyles && "text-sm text-muted-foreground", props.class)}
  />
)

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
