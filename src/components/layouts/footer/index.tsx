import { Separator } from "@/components/ui/separator"
import { footerData } from "@/lib/data"
import FooterLinkItem from "./footer-link-item"

export default function Footer() {
  return (
    <footer>
      <Separator className="mb-5" />

      <ul className="flex justify-center gap-5">
        {footerData.map((item) => (
          <FooterLinkItem key={item.href} {...item} />
        ))}
      </ul>
    </footer>
  )
}
