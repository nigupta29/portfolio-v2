import Image from "next/image"

export default function Home() {
  return (
    <div className='flex h-screen flex-col justify-end'>
      <div className='relative h-[100px] w-[100px] overflow-hidden rounded-full'>
        <Image
          src='https://github.com/nigupta29.png'
          alt='profile picture'
          className='object-center'
          sizes='100px'
          fill
        />
      </div>
    </div>
  )
}
