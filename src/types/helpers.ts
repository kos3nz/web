export type As = React.ElementType

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As
}

/**
 * Omit dupulicate properties
 */
type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> & TOverridden

/**
 * Add as prop to Component
 */
export type ComponentPropsWithAs<
  T extends keyof JSX.IntrinsicElements,
  U extends object = {},
> = {
  [K in T]: OverrideProps<JSX.IntrinsicElements[T], U> & { as?: T }
}[T]

export type Assign<T, U> = Omit<T, keyof U> & U

/**
 * Give all the properties the type has
 */
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}
