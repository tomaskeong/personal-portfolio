import type { AppProps } from "next/app"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import dynamic from "next/dynamic"
import ScrollToTop from "../components/ScrollToTop"
import "assets/styles/main.scss"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])

  const DynamicAnimatedCursor = dynamic(
    () => import("./../components/animated-cursor/AnimatedCursorComponent"),
    {
      ssr: false,
    }
  )
  return (
    <>
      <DynamicAnimatedCursor
        color="255, 147, 1"
        outerAlpha={0.2}
        innerSize={8}
        outerSize={50}
        innerScale={0.7}
        outerScale={1.2}
      />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
