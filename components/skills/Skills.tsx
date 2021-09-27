import React from "react"
import FrontendIcon from "assets/icons/skills-frontend.svg"
import BackendIcon from "assets/icons/skills-backend.svg"
import AzureIcon from "assets/icons/skills-azure.svg"
import TechnicalLeadIcon from "assets/icons/skills-technicalLead.svg"
import Image from "next/image"

const ServiceContent = [
  {
    icon: FrontendIcon,
    title: "Frontend Web Development",
    descriptions: `Firm grasp of frontend technologies & frameworks`,
    delayAnimation: "",
  },
  {
    icon: BackendIcon,
    title: "Backend",
    descriptions: `Designed scalable .NET C# backend solutions`,
    delayAnimation: "200",
  },
  {
    icon: AzureIcon,
    title: "Microsoft Azure",
    descriptions: `Knowledgable in Azure DevOps, CI/CD processes and AI solutions`,
    delayAnimation: "400",
  },
  {
    icon: TechnicalLeadIcon,
    title: "Technical Leading",
    descriptions: `Management, assignment and quality control of team’s technical tasks`,
    delayAnimation: "",
  },
]
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
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
                  src={val.icon ?? ""}
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
