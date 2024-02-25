import { Separator } from "@/components/ui/separator"
import FooterItems from "./footer-items"

export default function Footer() {
  return (
    <footer>
      <Separator className="mb-5" />
      <FooterItems />
    </footer>
  )
}
