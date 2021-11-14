import About from 'components/about/About'
import Footer from 'components/footer/Footer'
import NavMenu from 'components/nav-menu/NavMenu'
import type { NextPage } from 'next'

import HeadComponent from '../components/Head'
import Slider from '../components/slider/Slider'

const Home: NextPage = () => {
  return (
    <div className="main-left theme-dark">
      <HeadComponent />
      {/* End Head section */}

      <NavMenu />
      {/* End Navigation Menu section */}

      <Slider />
      {/* End Slider section */}

      <About />
      {/* End About section */}

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End footer */}
    </div>
  )
}

export default Home
