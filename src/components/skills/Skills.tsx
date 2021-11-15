import React from 'react'

import AzureIcon from 'assets/icons/skills-azure.svg'
import BackendIcon from 'assets/icons/skills-backend.svg'
import FrontendIcon from 'assets/icons/skills-frontend.svg'
import TechnicalLeadIcon from 'assets/icons/skills-technicalLead.svg'
import Image from 'next/image'

const SkillsContent = [
  {
    icon: FrontendIcon,
    title: 'Frontend Web Development',
    descriptions: `Firm grasp of frontend technologies & frameworks`,
    delayAnimation: '',
  },
  {
    icon: BackendIcon,
    title: '.NET',
    descriptions: `Designed and implemented .NET C# solutions; Developed Unity applications with C# scripting`,
    delayAnimation: '200',
  },
  {
    icon: AzureIcon,
    title: 'Microsoft Azure',
    descriptions: `Knowledgeable in Azure DevOps, CI/CD processes and AI solutions`,
    delayAnimation: '400',
  },
  {
    icon: TechnicalLeadIcon,
    title: 'Technical Leading',
    descriptions: `Management, assignment and quality control of team’s technical tasks`,
    delayAnimation: '',
  },
]
const Service = (): JSX.Element => {
  return (
    <>
      <div className="row">
        {SkillsContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <Image
                  className="icon img-svg"
                  src={val.icon ?? ''}
                  alt={`${val.title} _img`}
                />
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  )
}

export default Service
