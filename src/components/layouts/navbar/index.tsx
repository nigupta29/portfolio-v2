import { navlinkItems } from "@/lib/data"
import { Separator } from "../../ui/separator"
import Logo from "../logo"
import MobileNavDrawer from "./mobile-nav-drawer"
import NavlinkItem from "./navlink-item"

export default function Navbar() {
  return (
    <header>
      <nav className='flex justify-between items-center md:items-end'>
        <Logo />

        <ul className='hidden md:flex gap-2'>
          {navlinkItems.map((item) => (
            <NavlinkItem key={item.href} {...item} />
          ))}
          <NavlinkItem
            href='mailto:nikhil.gupta5667@gmail.com'
            label='Contact'
            variant='default'
          />
        </ul>
        <MobileNavDrawer />
      </nav>
      <Separator className='mt-5' />
    </header>
  )
}
