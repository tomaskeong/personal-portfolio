import React from 'react'

import { SocialShare } from 'components/Social'

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="row align-items-center">
        <div className="my-2 text-center text-md-end">
          <div className="nav justify-content-center justify-content-md-end">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  )
}

export default Footer
