import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h2>Nikhil Gupta</h2>
      <h5 className="lowercase text-primary">software techie.</h5>
    </Link>
  )
}
