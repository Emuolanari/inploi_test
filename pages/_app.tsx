import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'
import { createContext, useState } from 'react'

interface Context {
  setBackground: (value: string) => void
}

export const PageBackgroundContext = createContext<Context>({
  setBackground: () => null,
})

export default function App({ Component, pageProps }: AppProps) {
  const [background, setBackground] = useState('')
  return (
    <PageBackgroundContext.Provider value={{ setBackground }}>
      <div className={`flex flex-col min-h-screen ${background}`}>
        <div className="flex justify-between py-5 px-6">
          <Link href="/" className="">
            <Image
              src="/Paradigmo_Logo.png"
              alt="logo"
              height={35}
              width={35}
            />
          </Link>
          <button className="bg-primary text-white text-sm py-2 px-6 rounded-md">
            Login
          </button>
        </div>
        <Component {...pageProps} />
      </div>
    </PageBackgroundContext.Provider>
  )
}
