import { SkillItem } from "@/lib/types"
import { getIconsLink } from "@/lib/utils"
import Image from "next/image"

export default function SkillsItem({ imageRef, label }: SkillItem) {
  return (
    <li className="relative h-16 w-16">
      <Image
        src={getIconsLink(imageRef)}
        fill={true}
        alt={label}
        sizes="64px"
      />
    </li>
  )
}
