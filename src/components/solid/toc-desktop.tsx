/** @jsxImportSource solid-js */

import TableOfContents from "@/components/solid/table-of-contents"
import { createActiveHeading } from "@/hooks/solid/create-active-heading"
import type { Heading } from "@/types/global.types"

export default function TocDesktop(props: { headings: Heading[] }) {
  // eslint-disable-next-line solid/reactivity
  const activeHeading = createActiveHeading(props.headings)

  return (
    <div class="sticky top-32">
      <span class="ml-5 block text-sm font-semibold">On this page</span>
      <TableOfContents headings={props.headings} activeHeading={activeHeading()} />
    </div>
  )
}
