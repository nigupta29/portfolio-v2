import { LucideIcon } from "lucide-react"

export type NavLinkItem = {
  href: string
  label: string
  variant?: "default" | "secondary"
}

export type SkillItem = {
  imageRef: string
  label: string
}

export type FooterItem = {
  href: string,
  Icon: LucideIcon
}