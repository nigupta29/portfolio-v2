import { Button } from "@/components/ui/button"
import { FooterItem } from "@/lib/types"
import Link from "next/link"

export default function FooterLinkItem({ href, Icon }: FooterItem) {
  return (
    <Button asChild size={"icon"} variant={"ghost"}>
      <Link href={href} target="__blank__">
        <Icon />
      </Link>
    </Button>
  )
}
