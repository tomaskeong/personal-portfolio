import type { NextPage } from "next"
import HeadComponent from "../components/Head"
import Slider from "../components/slider/Slider"

const Home: NextPage = () => {
  return (
    <div className="main-left theme-dark">
      <HeadComponent />
      {/* End Head component */}

      <Slider />
      {/* End Slider component */}
    </div>
  )
}

export default Home
