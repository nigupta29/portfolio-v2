import { skillsData } from "@/lib/data"
import SkillItem from "./skills-item"

export default function Skills() {
  return (
    <section>
      <h3 className="mb-6">Skills & Tools</h3>
      <ul className="flex flex-wrap gap-[0.35rem] md:gap-[0.66rem]">
        {skillsData.map((item) => (
          <SkillItem key={item.label} {...item} />
        ))}
      </ul>
    </section>
  )
}
