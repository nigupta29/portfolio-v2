import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"
import { navlinkItems } from "@/lib/data"
import { GanttChartIcon } from "lucide-react"
import NavlinkItem from "./navlink-item"
import FooterItems from "../footer/footer-items"
import { Separator } from "@/components/ui/separator"

export default function MobileNavDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size={"icon"} className="md:hidden">
          <GanttChartIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-5 py-2">
        <DrawerHeader>
          <DrawerTitle>Explore.</DrawerTitle>
        </DrawerHeader>
        <ul className="flex flex-col space-y-3 px-20 py-2">
          {navlinkItems.map((item) => (
            <NavlinkItem key={item.href} {...item} />
          ))}
        </ul>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
          <Separator className="my-5" />
          <FooterItems />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
