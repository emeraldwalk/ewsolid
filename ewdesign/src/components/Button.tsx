import { JSX } from 'solid-js'
import styles from './Button.module.scss'

export interface ButtonProps {
  variant: 'primary' | 'secondary'
  children: JSX.Element
}

export function Button({ variant, children }: ButtonProps) {
  return (
    <button class={`${styles.button} ${styles[variant]}`}>{children}</button>
  )
}

export default Button
