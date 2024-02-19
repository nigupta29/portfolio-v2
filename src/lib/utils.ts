import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getIconsLink(ref: string): string {
  return "https://skillicons.dev/icons?i=" + ref
}