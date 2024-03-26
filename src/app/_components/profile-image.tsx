import Image from "next/image"

export default function ProfileImage() {
  return (
    <Image
      src="https://github.com/nigupta29.png"
      alt="profile picture"
      className="object-cover"
      sizes="100px"
      fill
    />
  )
}
