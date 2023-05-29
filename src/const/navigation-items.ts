import {
  AboutIcon as SolidAboutIcon,
  BlogIcon as SolidBlogIcon,
  SnippetsIcon as SolidSnippetsIcon,
} from 'ui/solidjs/icons.tsx'
import {
  AboutIcon as ReactAboutIcon,
  BlogIcon as ReactBlogIcon,
  SnippetsIcon as ReactSnippetsIcon,
} from 'ui/react/icons.tsx'

export const solidNavItems = [
  { path: '/', label: 'About', Icon: SolidAboutIcon },
  { path: '/blog/', label: 'Blog', Icon: SolidBlogIcon },
  { path: '/snippets/', label: 'Snippets', Icon: SolidSnippetsIcon },
] as const

export const reactNavItems = [
  { path: '/', label: 'About', Icon: ReactAboutIcon },
  { path: '/blog/', label: 'Blog', Icon: ReactBlogIcon },
  { path: '/snippets/', label: 'Snippets', Icon: ReactSnippetsIcon },
] as const
