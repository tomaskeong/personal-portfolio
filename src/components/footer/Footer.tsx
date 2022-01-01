import React from 'react'

import { SocialShare } from 'components/Social'

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
        </div>
        {/* End .col */}
        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright{' '}
            <a
              href="https://www.linkedin.com/in/tomas-c-keong/"
              target="_blank"
              rel="noreferrer"
            >
              Tomás Keong
            </a>
          </p>
        </div>
      </div>
      {/* End .row */}
    </>
  )
}

export default Footer
