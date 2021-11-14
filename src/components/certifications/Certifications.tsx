import React from 'react'

import azure_ai_engineer from 'assets/imgs/azure-ai-engineer.png'
import azure_developer_associate from 'assets/imgs/azure-developer-associate.png'
import mcsd_app_builder from 'assets/imgs/MCSD-App-Builder-2018.png'
import Image from 'next/image'

const CertificationsContent = [
  {
    img: azure_developer_associate,
    awardName: 'Microsoft',
    awardFor: 'Microsoft Certified: Azure Developer Associate',
    delayAnimation: '0',
  },
  {
    img: mcsd_app_builder,
    awardName: 'Microsoft',
    awardFor: 'Microsoft Certified Solutions Developer (MCSD): App Builder',
    delayAnimation: '200',
  },
  {
    img: azure_ai_engineer,
    awardName: 'Microsoft',
    awardFor: 'Microsoft Certified: Azure AI Engineer Associate',
    delayAnimation: '400',
  },
]

const Certifications = (): JSX.Element => {
  return (
    <>
      <div className="row">
        {CertificationsContent.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <Image src={val.img} alt="award image" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  )
}

export default Certifications
