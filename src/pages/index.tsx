import { api } from 'common/constants'
import { dataFieldUtils } from 'common/utils/dataFields'
import About from 'components/about/About'
import Footer from 'components/footer/Footer'
import NavMenu from 'components/nav-menu/NavMenu'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { handleResponse } from 'services/service'

import HeadComponent from '../components/Head'
import Slider, { Quotation } from '../components/slider/Slider'

const Home: NextPage = ({
  global,
  mainRoles,
  quotation,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="main-left theme-dark">
      <HeadComponent global={global} />
      {/* End Head section */}

      <NavMenu />
      {/* End Navigation Menu section */}

      <Slider mainRoles={mainRoles} global={global} quotation={quotation} />
      {/* End Slider section */}

      <About />
      {/* End About section */}

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End footer */}
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const headers = {
    Authorization: `bearer ${process.env.CMS_API_TOKEN}`,
  }

  try {
    const [globalRes, mainRolesRes, quotationRes] = await Promise.all([
      fetch(
        `${process.env.CMS_API_URL}/${api.root}/${api.apiUrl.global}/${api.populate}`,
        {
          headers,
        },
      ),
      fetch(`${process.env.CMS_API_URL}/${api.root}/${api.apiUrl.mainRoles}`, {
        headers,
      }),
      fetch(`${process.env.CMS_API_URL}/${api.root}/${api.apiUrl.quotation}`, {
        headers,
      }),
    ])

    const [global, mainRoles, quotation] = await Promise.all([
      handleResponse(globalRes),
      handleResponse(mainRolesRes),
      handleResponse(quotationRes),
    ])

    const _quotation: Quotation = {
      quote: dataFieldUtils.getField(quotation.data, 'Quote'),
      author: dataFieldUtils.getField(quotation.data, 'Author'),
    }

    return {
      props: {
        global: global?.data || null,
        mainRoles: mainRoles?.data || null,
        quotation: _quotation || null,
      },
    }
  } catch (err) {
    return {
      props: {
        errors: JSON.stringify(err) || null,
      },
    }
  }
}
