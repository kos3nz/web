/** @jsxImportSource solid-js */

import { createActiveHeading } from 'hooks/solidjs/create-active-heading'
import type { Heading } from 'types/global'
import TableOfContents from 'ui/solidjs/table-of-contents.tsx'

export default function HeadingsDesktop(props: { headings: Heading[] }) {
  // eslint-disable-next-line solid/reactivity
  const activeHeading = createActiveHeading(props.headings)

  return (
    <aside class="hidden w-64 lg:block">
      <div class="sticky top-32">
        <TableOfContents
          headings={props.headings}
          activeHeading={activeHeading()}
        />
      </div>
    </aside>
  )
}
