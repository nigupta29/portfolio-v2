"use client"

import { Button } from "@/components/ui/button"
import { NavLinkItem } from "@/lib/types"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavlinkItem({ href, label, variant }: NavLinkItem) {
  const pathname = usePathname()
  return (
    <Button
      variant={variant ?? (pathname === href ? "secondary" : "ghost")}
      asChild
    >
      <Link href={href} className='capitalize'>
        {label}
      </Link>
    </Button>
  )
}
