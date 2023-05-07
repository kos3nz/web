import AboutIcon from 'ui/solidjs/icons/about-icon.tsx'
import BlogIcon from 'ui/solidjs/icons/blog-icon.tsx'
import SnippetsIcon from 'ui/solidjs/icons/snippets-icon.tsx'
import ReactAboutIcon from 'ui/react/icons/about-icon.tsx'
import ReactBlogIcon from 'ui/react/icons/blog-icon.tsx'
import ReactSnippetsIcon from 'ui/react/icons/snippets-icon.tsx'

export const navItems = [
  { path: '/', label: 'About', Icon: AboutIcon },
  { path: '/blog/', label: 'Blog', Icon: BlogIcon },
  { path: '/snippets/', label: 'Snippets', Icon: SnippetsIcon },
] as const

export const reactNavItems = [
  { path: '/', label: 'About', Icon: ReactAboutIcon },
  { path: '/blog/', label: 'Blog', Icon: ReactBlogIcon },
  { path: '/snippets/', label: 'Snippets', Icon: ReactSnippetsIcon },
] as const
