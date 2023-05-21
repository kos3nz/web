/** @jsxImportSource react */

import { useStore } from '@nanostores/react'
import cx from 'clsx'
import { PanInfo, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useOutsideClick } from 'hooks/react/use-outside-click'
import { reactNavItems } from 'src/const/navigation-items'
import { closeDrawer, isDrawerOpen } from 'store/drawer-store.ts'

const initialTransitionDuration = 0.3
const maxVelocity = 200

export default function DrawerMenu({ pathname }: { pathname: string }) {
  let currentPath = pathname
  if (pathname.includes('/blog/')) currentPath = '/blog/'
  if (pathname.includes('/snippets/')) currentPath = '/snippets/'

  const drawerMenuRef = useRef<HTMLDivElement>(null)
  const [y, setY] = useState(0)
  const duration = useRef(initialTransitionDuration)
  const $isDrawerOpen = useStore(isDrawerOpen)

  const onPan = (_: PointerEvent, { offset }: PanInfo) => {
    if (offset.y <= 0) return

    setY(offset.y)
  }

  const onPanStart = () => {
    duration.current = 0
  }

  const onPanEnd = (_: PointerEvent, { velocity }: PanInfo) => {
    const drawerHeight = drawerMenuRef.current?.getBoundingClientRect().height

    if (drawerHeight && (y > drawerHeight * 0.5 || velocity.y > maxVelocity)) {
      duration.current =
        initialTransitionDuration * ((drawerHeight - y) / drawerHeight)

      closeDrawer()
    }

    duration.current = initialTransitionDuration
    setY(0)
  }

  useOutsideClick([drawerMenuRef], closeDrawer)

  return (
    <>
      <motion.div
        className={cx(
          'fixed inset-0 z-[99] bg-slate-900/50 transition-all duration-500',
          $isDrawerOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        onPan={onPan}
        onPanStart={onPanStart}
        onPanEnd={onPanEnd}
      />
      <motion.div
        ref={drawerMenuRef}
        className={cx(
          'fixed bottom-0 left-0 z-[100] w-full overflow-hidden ease-in-out',
        )}
        style={{
          transform: `translateY(calc(${
            $isDrawerOpen ? '0' : '100'
          }% + ${y}px))`,
          transition: `transform ${duration.current}s`,
        }}
        onPan={onPan}
        onPanStart={onPanStart}
        onPanEnd={onPanEnd}
      >
        <span className="absolute left-1/2 top-4 h-1 w-8 -translate-x-1/2 rounded-full bg-slate-400" />

        <ul className="divide-y divide-slate-400/20 rounded-t-3xl bg-slate-800 px-8 pb-4 pt-8">
          {reactNavItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.path}
                className={cx('group flex w-full justify-start px-3 py-6')}
              >
                <div
                  className={cx(
                    'flex items-center gap-x-1.5 text-sm font-semibold transition-colors duration-300',
                    currentPath === item.path
                      ? 'border-b-2 border-cyan-400'
                      : 'text-slate-400 group-hover:text-slate-200',
                  )}
                >
                  <span className="shrink-0">
                    <item.Icon />
                  </span>
                  <span>{item.label}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  )
}
