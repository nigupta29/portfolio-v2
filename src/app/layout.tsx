import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <div className="fixed right-[11rem] top-[-6rem] -z-10 h-[30rem] w-[80rem] rounded-full bg-[#fbe2e3] blur-[10rem]"></div>
        <div className="fixed left-[5rem] top-[12rem] -z-10 h-[30rem] w-[80rem] rounded-full bg-[#dbd7fb] blur-[10rem]"></div>

        <main>{children}</main>
      </body>
    </html>
  )
}
