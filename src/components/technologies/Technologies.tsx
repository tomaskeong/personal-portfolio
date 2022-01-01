import React from 'react'

import { FaCss3Alt, FaHtml5, FaReact, FaSass } from 'react-icons/fa'
import {
  SiCsharp,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiJest,
  SiAzuredevops,
  SiMicrosoftazure,
  SiAzurepipelines,
  SiDotnet,
  SiUnity,
} from 'react-icons/si'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export default function SimpleSlider(): JSX.Element {
  const settings = {
    dots: true,
    arrow: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const TechnologiesContent = [
    {
      scope: 'frontend',
      desc: [
        {
          img: <FaReact color="white" size="40" />,
          name: 'React',
        },
        {
          img: <SiNextdotjs color="white" size="40" />,
          name: 'Next.js',
        },
        {
          img: <SiRedux color="white" size="40" />,
          name: 'Redux',
        },
        {
          img: <SiJavascript color="white" size="40" />,
          name: 'JavaScript',
        },
        {
          img: <SiTypescript color="white" size="40" />,
          name: 'TypeScript',
        },
        {
          img: <FaHtml5 color="white" size="40" />,
          name: 'HTML',
        },
        {
          img: <FaCss3Alt color="white" size="40" />,
          name: 'CSS',
        },
        {
          img: <FaSass color="white" size="40" />,
          name: 'SASS',
        },
        {
          img: <SiTailwindcss color="white" size="40" />,
          name: 'Tailwind CSS',
        },
        {
          img: <SiJest color="white" size="40" />,
          name: 'Jest',
        },
      ],
      delayAnimation: '',
    },
    {
      scope: '.NET',
      desc: [
        {
          img: <SiDotnet color="white" size="40" key="react" />,
          name: '.NET',
        },
        {
          img: <SiCsharp color="white" size="40" key="react" />,
          name: 'C#',
        },
        {
          img: <SiUnity color="white" size="40" key="react" />,
          name: 'Unity',
        },
      ],
      delayAnimation: '200',
    },
    {
      scope: 'microsoft',
      desc: [
        {
          img: <SiMicrosoftazure color="white" size="40" key="react" />,
          name: 'Azure',
        },
        {
          img: <SiAzuredevops color="white" size="40" key="react" />,
          name: 'DevOps',
        },
        {
          img: <SiAzurepipelines color="white" size="40" key="react" />,
          name: 'CI/CD',
        },
      ],
      delayAnimation: '400',
    },
  ]

  return (
    <div className="technologies-wrapper">
      <Slider {...settings}>
        {TechnologiesContent.map((slide, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={slide.delayAnimation}
          >
            <div className="technologies-01 media">
              <span className="technology-scope">{slide.scope}</span>
              <div className="media-body">
                {slide.desc?.map(
                  (technology, index) =>
                    (
                      <div key={index} className="media-item">
                        {technology.img}
                        <span>{technology.name}</span>
                      </div>
                    ) ?? null,
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
