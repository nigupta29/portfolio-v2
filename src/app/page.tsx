import { bg_font } from "@/lib/font"
import { twMerge } from "tailwind-merge"
import HomeNavbar from "./_components/home-navbar"
import ProfileImage from "./_components/profile-image"

export default function Home() {
  return (
    <div className="flex h-screen max-h-[1080px] w-full flex-col items-start justify-between gap-10 px-10 py-8 md:p-16">
      <HomeNavbar />
      <div className="space-y-8">
        <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border-8 border-gray-100/50">
          <ProfileImage />
        </div>
        <h3>{`Hi!👋 I'm Nikhil Gupta`}</h3>
        <h1
          className={twMerge(
            bg_font.className,
            "text-7xl font-normal text-gray-800 md:text-9xl"
          )}
        >
          I make websites for living.
        </h1>
        <h2 className={twMerge(bg_font.className, "font-normal text-gray-600")}>
          full stack developer based from India, who can build and test web
          application for you.
        </h2>
      </div>
    </div>
  )
}
