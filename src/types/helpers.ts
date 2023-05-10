export type As = React.ElementType

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As
}

export type Assign<T, U> = Omit<T, keyof U> & U
