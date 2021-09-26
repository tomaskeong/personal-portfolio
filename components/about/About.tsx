import React from "react"
import Social from "components/Social"
import Image from "next/image"
import Separator from "components/Separator"

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <Image
                      src="/img/profile-avatar.jpg"
                      alt="Profile Avatar"
                      width={500}
                      height={500}
                    />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Lead Engineer</p>
                  <h3>Tomás Keong</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    I&apos;m a Lead Engineer with a wide range of programming
                    utilities and languages, offering 4 years of experience.
                  </p>
                  <p>
                    Knowledgeable in frontend/backend technologies and the
                    technical requirements that emerge from them. Experienced
                    with technical leading and having a macro perspective
                    towards application architecture.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Tomás Cordeiro Keong</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>6th February 1995</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>26 years</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>tomaskeong@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Company: </label>
                          <span>everis NTT DATA</span>
                        </li>
                        <li>
                          <label>Branch: </label>
                          <span>Technology & Solutions</span>
                        </li>
                        <li>
                          <label>Country: </label>
                          <span>Portugal</span>
                        </li>
                        <li>
                          <label>City: </label>
                          <span>Lisbon</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <Separator />
          {/* End separated */}

          <div className="title">
            <h3>What I do?</h3>
          </div>

          {/* End .row */}
        </div>
      </section>
    </>
  )
}

export default About
