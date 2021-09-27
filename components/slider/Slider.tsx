import React from "react"
import { FaQuoteRight } from "react-icons/fa"
import { TextLoop } from "react-text-loop-next"
const contactInfo = {
  email: "tomaskeong@gmail.com",
}

const sliderContent = {
  name: "Tomás Keong",
  quote: {
    text: '"Any sufficiently advanced technology is indistinguishable from magic."',
    cite: "Arthur C. Clarke",
  },
  btnText: "Download CV",
}

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hi, my name is
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead"> Lead Engineer</p>
                    <p className="loop-text lead"> Technical Lead</p>
                    <p className="loop-text lead"> Web Developer</p>
                    <p className="loop-text lead"> Music Enthusiast</p>
                  </TextLoop>
                </div>

                <blockquote
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <p className="quote-text">{sliderContent.quote.text}</p>
                  <FaQuoteRight
                    className="doublequote"
                    color="#ff9301"
                    size={20}
                  />
                  <cite>
                    <p>- {sliderContent.quote.cite}</p>
                  </cite>
                </blockquote>

                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="docs/CV_Tomas_Keong.pdf"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home-banner.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  )
}

export default Slider
