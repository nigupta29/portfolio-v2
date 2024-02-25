import { footerData } from "@/lib/data"
import FooterLinkItem from "./footer-link-item"

export default function FooterItems() {
  return (
    <ul className="flex justify-center gap-5">
      {footerData.map((item) => (
        <FooterLinkItem key={item.href} {...item} />
      ))}
    </ul>
  )
}
