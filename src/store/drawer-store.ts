import { atom } from 'nanostores'

export const isDrawerOpen = atom(false)

export const openDrawer = () => {
  isDrawerOpen.set(true)
  document.documentElement.style.setProperty('--touch-action', 'none')
}

export const closeDrawer = () => {
  isDrawerOpen.set(false)
  document.documentElement.style.setProperty('--touch-action', 'auto')
}
