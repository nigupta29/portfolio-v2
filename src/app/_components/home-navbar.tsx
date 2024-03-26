import Link from "next/link"
import { Fragment } from "react"
import { CiMail } from "react-icons/ci"

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" }
]

export default function HomeNavbar() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-1 md:flex-row">
      <Link
        href={"mailto:nikhil.gupta5667@gmail.com"}
        target="__blank__"
        className="flex items-center gap-2 text-gray-700 hover:underline"
      >
        <CiMail size={20} />
        <span>nikhil.gupta5667@gmail.com</span>
      </Link>

      <nav className="flex items-center gap-3 md:gap-5">
        {links.map((item, index) => (
          <Fragment key={item.label}>
            <Link
              href={item.href}
              className="font-medium text-gray-700 hover:text-gray-950"
            >
              {item.label}
            </Link>
            {index !== links.length - 1 && "/"}
          </Fragment>
        ))}
      </nav>
    </div>
  )
}
