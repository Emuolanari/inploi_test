import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen w-full">
      <Component {...pageProps} />
    </div>
  )
}
