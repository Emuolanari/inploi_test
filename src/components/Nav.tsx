import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav: React.FC = () => {
  return (
    <div className="flex justify-between py-5 px-[10%]">
      <Link href="/" className="">
        <Image src="/Paradigmo_Logo.png" alt="logo" height={35} width={35} />
      </Link>
      <button className="bg-primary text-white text-sm py-2 px-6 rounded-md">
        Login
      </button>
    </div>
  )
}

export default Nav
