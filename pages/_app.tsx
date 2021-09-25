import type { AppProps } from "next/app"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import "./../assets/styles/main.scss"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])
  return <Component {...pageProps} />
}
export default MyApp
