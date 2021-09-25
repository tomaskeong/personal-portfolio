import type { NextPage } from "next"
import HeadComponent from "../components/Head"
import Slider from "../components/slider/Slider"

const Home: NextPage = () => {
  return (
    <div className="main-left theme-dark">
      <HeadComponent />

      <Slider />
    </div>
  )
}

export default Home
