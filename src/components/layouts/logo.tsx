import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h2>Nikhil Gupta</h2>
      <h5 className='text-primary'>software engineer.</h5>
    </Link>
  )
}
