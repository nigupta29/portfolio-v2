import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { FooterItem, NavLinkItem, SkillItem } from "./types"

export const navlinkItems: NavLinkItem[] = [
  {
    href: "/about",
    label: "about"
  },
  {
    href: "/projects",
    label: "projects"
  }
]

export const skillsData: SkillItem[] = [
  {
    imageRef: "java",
    label: "java"
  },
  {
    imageRef: "py",
    label: "python"
  },
  {
    imageRef: "javascript",
    label: "javascript"
  },
  {
    imageRef: "typescript",
    label: "typescript"
  },
  {
    imageRef: "tailwind",
    label: "tailwind"
  },
  {
    imageRef: "react",
    label: "react"
  },
  {
    imageRef: "nextjs",
    label: "nextjs"
  },
  {
    imageRef: "redux",
    label: "redux"
  },
  {
    imageRef: "firebase",
    label: "firebase"
  },
  {
    imageRef: "nodejs",
    label: "nodejs"
  },
  {
    imageRef: "express",
    label: "express"
  },
  {
    imageRef: "selenium",
    label: "selenium"
  },
  {
    imageRef: "mongodb",
    label: "mongodb"
  },
  {
    imageRef: "postgresql",
    label: "postgresql"
  },
  {
    imageRef: "figma",
    label: "figma"
  },
  {
    imageRef: "git",
    label: "git"
  },
  {
    imageRef: "github",
    label: "github"
  },
  {
    imageRef: "postman",
    label: "postman"
  }
]

export const footerData: FooterItem[] = [
  {
    href: "https://github.com/nigupta29",
    Icon: GithubIcon
  },
  {
    href: "https://twitter.com/jerry_codes",
    Icon: TwitterIcon
  },
  {
    href: "https://www.linkedin.com/in/nigupta29/",
    Icon: LinkedinIcon
  }
]
