import { createSignal } from 'solid-js'

export function createNavigationMarker() {
  const [position, setPosition] = createSignal({
    x: 0,
    width: 0,
    translateX: 0,
    scaleX: 1,
  })

  const handleOnMount = (ref: HTMLElement | undefined, isActive: boolean) => {
    if (!ref || !isActive) return

    const x = ref.offsetLeft // the left position (in pixels) relative to the parent. (the parent that has { posision: relative })
    const { width } = ref.getBoundingClientRect()

    setPosition((prev) => ({
      ...prev,
      x,
      width,
    }))
  }

  const handleOnMouseEnter = (
    ref: HTMLElement | undefined,
    isActive: boolean,
  ) => {
    if (!ref || isActive) return

    const x = ref.offsetLeft
    const { width } = ref.getBoundingClientRect()

    setPosition((state) => ({
      ...state,
      translateX: x - state.x,
      scaleX: width / state.width,
    }))
  }

  const handleOnMouseLeave = (isActive: boolean) => {
    if (isActive) return

    setPosition((state) => ({
      ...state,
      translateX: 0,
      scaleX: 1,
    }))
  }

  return {
    position,
    handleOnMount,
    handleOnMouseEnter,
    handleOnMouseLeave,
  }
}
