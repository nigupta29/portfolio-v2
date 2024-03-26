import { inter_font } from "@/lib/font"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nikhil Gupta — Developer, QA & Storyteller",
  description:
    "Check out my developer portfolio. I am an engineer who can code, build and test the web applications."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter_font.className}>
        <div className="fixed left-[5rem] top-[12rem] -z-10 h-[30rem] w-[60rem] rounded-full bg-cyan-400 blur-[12rem]"></div>
        <div className="fixed right-[15rem] top-[18rem] -z-10 h-[30rem] w-[60rem] rounded-full bg-amber-400 blur-[12rem]"></div>
        <div className="fixed right-[11rem] top-[-6rem] -z-10 h-[30rem] w-[60rem] rounded-full bg-rose-400 blur-[12rem]"></div>

        <main>{children}</main>
      </body>
    </html>
  )
}
