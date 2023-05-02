import AboutIcon from 'ui/solidjs/icons/about-icon.tsx'
import BlogIcon from 'ui/solidjs/icons/blog-icon.tsx'
import SnippetsIcon from 'ui/solidjs/icons/snippets-icon.tsx'

export const navItems = [
  { path: '/', label: 'About', Icon: AboutIcon },
  { path: '/blog/', label: 'Blog', Icon: BlogIcon },
  { path: '/snippets/', label: 'Snippets', Icon: SnippetsIcon },
] as const
