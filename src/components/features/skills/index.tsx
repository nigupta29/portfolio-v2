import { skillsData } from "@/lib/data"
import SkillItem from "./skills-item"
import { bg } from "@/lib/fonts"

export default function Skills() {
  return (
    <section>
      <h3 className={`mb-6 ${bg.className}`}>Skills & Tools</h3>
      <ul className="flex flex-wrap gap-[0.35rem] md:gap-[0.66rem]">
        {skillsData.map((item) => (
          <SkillItem key={item.label} {...item} />
        ))}
      </ul>
    </section>
  )
}
