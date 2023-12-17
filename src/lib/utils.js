import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const onScrollDown = (value) => {
  window.scrollBy({ top: value, behavior: 'smooth' })
}
