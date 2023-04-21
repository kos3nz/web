/** @jsxImportSource solid-js */

import cx from 'clsx'
import { For, Show, onMount } from 'solid-js'
import { createNavigationMarker } from '@hooks/solidjs/create-navigation-marker'
import AboutIcon from '@ui/solidjs/icons/about-icon.tsx'
import PostsIcon from '@ui/solidjs/icons/posts-icon.tsx'
import SnippetsIcon from '@ui/solidjs/icons/snippets-icon.tsx'

const navItems = [
  { path: '/', label: 'About', Icon: AboutIcon },
  { path: '/posts', label: 'Posts', Icon: PostsIcon },
  { path: '/snippets', label: 'Snippets', Icon: SnippetsIcon },
] as const

export default function Navigation(props: { pathname: string }) {
  // eslint-disable-next-line solid/reactivity
  let currentPath = props.pathname
  if (currentPath.includes('/posts')) currentPath = '/posts'
  if (currentPath.includes('/snippets')) currentPath = '/snippets'

  const { position, handleMount, handleMouseEnter, handleMouseLeave } =
    createNavigationMarker()

  return (
    <ol class="relative flex items-center">
      <For each={navItems}>
        {(item) => {
          const isActive = currentPath === item.path
          let ref: HTMLLIElement | undefined

          onMount(() => {
            handleMount(ref, isActive)
          })

          return (
            <li
              ref={ref}
              class="relative"
              onMouseEnter={() => {
                handleMouseEnter(ref, isActive)
              }}
              onMouseLeave={() => {
                handleMouseLeave(isActive)
              }}
            >
              <a
                href={item.path}
                class={cx([
                  'relative z-10 flex cursor-pointer items-center gap-x-1 rounded-md py-2 pl-4 pr-4 text-sm font-bold',
                  isActive
                    ? 'bg-teal-800/50 text-slate-50 shadow-highlight lg:bg-transparent lg:shadow-none'
                    : 'transision-color text-slate-500 duration-300 hover:text-slate-50',
                ])}
              >
                <item.Icon />
                <span>{item.label}</span>
              </a>
              <Show when={isActive}>
                <div
                  class={cx(
                    'layout',
                    'pointer-events-none absolute inset-0 hidden origin-left rounded-md bg-teal-800/50 shadow-highlight transition-transform duration-300 lg:block',
                  )}
                  style={{
                    transform: `
                    translateX(${position().translateX}px)
                    scaleX(${position().scaleX})`,
                  }}
                />
              </Show>
            </li>
          )
        }}
      </For>
    </ol>
  )
}
