import React from "react"
import { TextLoop } from "react-text-loop-next"

const contactInfo = {
  /* phone: "+351 917415770", */
  email: "tomaskeong@gmail.com",
}

const sliderContent = {
  name: "Tomás Keong",
  description:
    "Any sufficiently advanced technology is indistinguishable from magic.",
  btnText: " Donwload CV",
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
                <h6>Hi, my name is</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                  <p className="loop-text lead"> Lead Engineer</p>
                  <p className="loop-text lead"> Technical Lead</p>
                  <p className="loop-text lead"> Web Developer</p>
                  <p className="loop-text lead"> Music Enthusiast</p>
                </TextLoop>
                <p className="desc">{sliderContent.description}</p>
                <div className="mt-4">
                  <a
                    className="px-btn px-btn-white"
                    href="doc/CV_Tomas_Keong.pdf"
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
