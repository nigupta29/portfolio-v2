import Skills from "@/components/features/skills"
import Hero from "@/components/layouts/hero"

export default function Home() {
  return (
    <>
      <Hero
        title="I code, build & test apps."
        Content={
          "Hola! I'm Nikhil, a programmer with a bulding and testing web applications background living in India."
        }
      />
      <Skills />
    </>
  )
}
