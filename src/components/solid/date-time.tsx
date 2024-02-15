/** @jsxImportSource solid-js */

import dayjs from "dayjs"

import { cn } from "@/utils/helpers"

export default function DateTime(props: { dateTime: Date; class?: string }) {
  return (
    <time
      dateTime={props.dateTime.toISOString()}
      class={cn(
        "whitespace-nowrap text-sm tracking-wide text-muted-foreground",
        props.class,
      )}
    >
      {dayjs(props.dateTime).format("MMMM D, YYYY")}
    </time>
  )
}
