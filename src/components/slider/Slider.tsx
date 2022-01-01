import React from 'react'

import { dataFieldUtils } from 'common/utils/dataFields'
import getConfig from 'next/config'
import Image from 'next/image'
import { FaQuoteRight } from 'react-icons/fa'
import { TextLoop } from 'react-text-loop-next'

const contactInfo = {
  email: 'tomaskeong@gmail.com',
}

type SliderProps = {
  mainRoles: []
  global: Record<string, unknown>
  quotation: Quotation
}

export type Quotation = {
  quote: string
  author: string
}

const { publicRuntimeConfig } = getConfig()

const Slider = (props: SliderProps): JSX.Element => {
  const getImageSrc = () => {
    const imgUrl = dataFieldUtils.getField(
      dataFieldUtils.getField(props.global, 'HomeBanner'),
      'url',
      true,
    )
    if (!imgUrl) return '/'

    return imgUrl
  }

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
                  {dataFieldUtils.getField(props.global, 'Name')}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    {props.mainRoles?.map((role, index) => {
                      return (
                        <p className="loop-text lead" key={`role_${index}`}>
                          {' '}
                          {dataFieldUtils.getField(role, 'name')}
                        </p>
                      )
                    })}
                  </TextLoop>
                </div>

                <blockquote
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <p className="quote-text">{props.quotation?.quote}</p>
                  <FaQuoteRight
                    className="doublequote"
                    color="#ff9301"
                    size={20}
                  />
                  <cite>
                    <p>- {props.quotation?.author}</p>
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
                    href={
                      publicRuntimeConfig.CMS_API_URL +
                      dataFieldUtils.getField(
                        dataFieldUtils.getField(
                          props.global,
                          'CurriculumVitae',
                        ),
                        'url',
                        true,
                      )
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div className="hb-me" data-aos="fade-left" data-aos-duration="1200">
          <Image
            src={publicRuntimeConfig.CMS_URL + getImageSrc()}
            layout="fill"
            alt="banner-image"
          />
        </div>
      </section>

      {/* End Home Banner  */}
    </>
  )
}

export default Slider
