import { bg } from "@/lib/fonts"

type Props = {
  title: string
  Content: string | JSX.ElementType
}

export default function Hero({ title, Content }: Props) {
  return (
    <section>
      <h1 className={`mb-6 ${bg.className}`}>{title}</h1>
      {typeof Content === "string" ? (
        <p className="text-lg text-zinc-600">{Content}</p>
      ) : (
        <Content />
      )}
    </section>
  )
}
