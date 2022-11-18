import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-primary-100 via-primary-200 to-[#F6f9EB]">
      {/* using relative positioning for the sake of not copying the logo to both pages */}
      <div className="flex justify-between py-5 px-6">
        <Link href="/" className="">
          <Image src="/Paradigmo_Logo.png" alt="logo" height={35} width={35} />
        </Link>
        <button className="bg-primary text-white text-sm py-2 px-6 rounded-md">
          Login
        </button>
      </div>
      <Component {...pageProps} />
    </div>
  )
}
