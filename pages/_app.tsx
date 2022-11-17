import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="relative">
        <Link href="/" className="absolute top-6  left-7">
          <Image src="/Paradigmo_Logo.png" alt="logo" height={35} width={35} />
        </Link>
      </div>
      <Component {...pageProps} />
    </>
  )
}
