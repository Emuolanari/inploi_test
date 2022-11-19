import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'
import Nav from '../src/components/Nav'
import Head from 'next/head'

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta
          name="description"
          content="With Paradigmo, you can search millions of jobs online to find the next step in your career"
        ></meta>
        <meta
          name="keywords"
          content="jobs search, apply, find jobs, remote jobs, paradigmo, employment, work"
        />
      </Head>
      <div className={`flex flex-col min-h-screen ${background}`}>
        <Nav />
        <Component {...pageProps} />
      </div>
    </PageBackgroundContext.Provider>
  )
}
