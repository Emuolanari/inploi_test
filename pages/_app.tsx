import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'
import Nav from '../src/components/Nav'

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
        <Nav />
        <Component {...pageProps} />
      </div>
    </PageBackgroundContext.Provider>
  )
}
