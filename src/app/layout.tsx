import Footer from "@/components/layouts/footer"
import Navbar from "@/components/layouts/navbar"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nikhil Gupta.",
  description:
    "Check out my tech portfolio. I am an engineer who can code, build and test the web applications."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto w-full max-w-3xl space-y-20 p-4">
          <Navbar />
          <main className="space-y-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
