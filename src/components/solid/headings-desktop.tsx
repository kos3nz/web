/** @jsxImportSource solid-js */

import TableOfContents from "@/components/solid/table-of-contents"
import { createActiveHeading } from "@/hooks/solid/create-active-heading"
import type { Heading } from "@/types/global.types.ts"

export default function HeadingsDesktop(props: { headings: Heading[] }) {
  // eslint-disable-next-line solid/reactivity
  const activeHeading = createActiveHeading(props.headings)

  return (
    <div class="sticky top-20">
      <TableOfContents headings={props.headings} activeHeading={activeHeading()} />
    </div>
  )
}
