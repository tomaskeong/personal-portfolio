import React from 'react'

import useDocumentTitle from 'components/useDocumentTitle'
import { NextPage } from 'next'
import Link from 'next/link'

const NotFound: NextPage = () => {
  useDocumentTitle('404 - Page Not Found')
  return (
    <>
      <section className="error-page-wrapper">
        <div className="container">
          <div className="row justify-content-center full-screen align-items-center">
            <div className="col-lg-8 text-center">
              <div className="inner">
                <h1 className="display-3 white-color m-15px-b">
                  404 - Page Not Found
                </h1>
                <p className="h4">
                  Whoops, it looks like the page you request wasn&apos;t found.
                </p>
                <div className="btn-bar mt-4">
                  <Link href="/">
                    <a className="px-btn px-btn-white">BACK TO HOME</a>
                  </Link>
                  {/* End purchase_button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Error Page Wrapper */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container"></div>
      </footer>
      {/* End footer */}
    </>
  )
}

export default NotFound
