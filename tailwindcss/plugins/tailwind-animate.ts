/**
 * The code in this file is copied from https://github.com/jamiebuilds/tailwindcss-animate and modified to better suit my needs.
 */

import type * as CSS from "csstype"
import plugin from "tailwindcss/plugin"

type CSSProperty = keyof CSS.Properties
type ThemeFn = (cssProperty: CSSProperty) => Record<string, string>

export default plugin(
  function tailwindAnimate({ addUtilities, matchUtilities, theme }) {
    addUtilities({
      "@keyframes enter": theme("keyframes.enter"),
      "@keyframes exit": theme("keyframes.exit"),
      ".animate-in": {
        animationName: "enter",
        animationDuration: `var(--tw-animation-duration, 150ms)`,
        animationDelay: `var(--tw-animation-delay, 0s)`,
        "--tw-enter-opacity": "initial",
        "--tw-enter-scale": "initial",
        "--tw-enter-rotate": "initial",
        "--tw-enter-translate-x": "initial",
        "--tw-enter-translate-y": "initial",
      },
      ".animate-out": {
        animationName: "exit",
        animationDuration: `var(--tw-animation-duration, 150ms)`,
        animationDelay: `var(--tw-animation-delay, 0s)`,
        "--tw-exit-opacity": "initial",
        "--tw-exit-scale": "initial",
        "--tw-exit-rotate": "initial",
        "--tw-exit-translate-x": "initial",
        "--tw-exit-translate-y": "initial",
      },
    })

    matchUtilities(
      {
        "fade-in": (value: string) => ({ "--tw-enter-opacity": value }),
        "fade-out": (value: string) => ({ "--tw-exit-opacity": value }),
      },
      { values: theme("animationOpacity") },
    )

    matchUtilities(
      {
        "zoom-in": (value: string) => ({ "--tw-enter-scale": value }),
        "zoom-out": (value: string) => ({ "--tw-exit-scale": value }),
      },
      { values: theme("animationScale") },
    )

    matchUtilities(
      {
        "spin-in": (value: string) => ({ "--tw-enter-rotate": value }),
        "spin-out": (value: string) => ({ "--tw-exit-rotate": value }),
      },
      { values: theme("animationRotate") },
    )

    matchUtilities(
      {
        "slide-in-from-top": (value: string) => ({
          "--tw-enter-translate-y": `-${value}`,
        }),
        "slide-in-from-bottom": (value: string) => ({
          "--tw-enter-translate-y": value,
        }),
        "slide-in-from-left": (value: string) => ({
          "--tw-enter-translate-x": `-${value}`,
        }),
        "slide-in-from-right": (value: string) => ({
          "--tw-enter-translate-x": value,
        }),
        "slide-out-to-top": (value: string) => ({
          "--tw-exit-translate-y": `-${value}`,
        }),
        "slide-out-to-bottom": (value: string) => ({
          "--tw-exit-translate-y": value,
        }),
        "slide-out-to-left": (value: string) => ({
          "--tw-exit-translate-x": `-${value}`,
        }),
        "slide-out-to-right": (value: string) => ({
          "--tw-exit-translate-x": value,
        }),
      },
      { values: theme("animationTranslate") },
    )

    matchUtilities(
      {
        "animate-duration": (value: string) => ({
          animationDuration: value,
          "--tw-animation-duration": value,
        }),
      },
      { values: filterDefault(theme("animationDuration")) },
    )

    matchUtilities(
      {
        "animate-delay": (value: string) => ({
          animationDelay: value,
          "--tw-animation-delay": value,
        }),
      },
      { values: theme("animationDelay") },
    )

    matchUtilities(
      { "animate-ease": (value: string) => ({ animationTimingFunction: value }) },
      { values: filterDefault(theme("animationTimingFunction")) },
    )

    addUtilities({
      ".running": { animationPlayState: "running" },
      ".paused": { animationPlayState: "paused" },
    })

    matchUtilities(
      { "animate-fill-mode": (value: string) => ({ animationFillMode: value }) },
      { values: theme("animationFillMode") },
    )

    matchUtilities(
      { "animate-direction": (value: string) => ({ animationDirection: value }) },
      { values: theme("animationDirection") },
    )

    matchUtilities(
      { "animate-repeat": (value: string) => ({ animationIterationCount: value }) },
      { values: theme("animationRepeat") },
    )
  },
  {
    theme: {
      extend: {
        animationDelay: ({ theme }: { theme: ThemeFn }) => ({
          ...theme("transitionDelay"),
        }),
        animationDuration: ({ theme }: { theme: ThemeFn }) => ({
          ...theme("transitionDuration"),
        }),
        animationTimingFunction: ({ theme }: { theme: ThemeFn }) => ({
          ...theme("transitionTimingFunction"),
        }),
        animationFillMode: {
          none: "none",
          forwards: "forwards",
          backwards: "backwards",
          both: "both",
        },
        animationDirection: {
          normal: "normal",
          reverse: "reverse",
          alternate: "alternate",
          "alternate-reverse": "alternate-reverse",
        },
        animationOpacity: ({ theme }: { theme: ThemeFn }) => ({
          DEFAULT: 0,
          ...theme("opacity"),
        }),
        animationTranslate: ({ theme }: { theme: ThemeFn }) => ({
          DEFAULT: "100%",
          ...theme("translate"),
        }),
        animationScale: ({ theme }: { theme: ThemeFn }) => ({
          DEFAULT: 0,
          ...theme("scale"),
        }),
        animationRotate: ({ theme }: { theme: ThemeFn }) => ({
          DEFAULT: "30deg",
          ...theme("rotate"),
        }),
        animationRepeat: {
          0: "0",
          1: "1",
          infinite: "infinite",
        },
        keyframes: {
          enter: {
            from: {
              opacity: "var(--tw-enter-opacity, 1)",
              transform:
                "translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))",
            },
          },
          exit: {
            to: {
              opacity: "var(--tw-exit-opacity, 1)",
              transform:
                "translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))",
            },
          },
        },
      },
    },
  },
)

function filterDefault(values: Record<string, string>) {
  return Object.fromEntries(Object.entries(values).filter(([key]) => key !== "DEFAULT"))
}
