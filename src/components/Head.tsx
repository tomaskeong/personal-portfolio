import { dataFieldUtils } from 'common/utils/dataFields'
import getConfig from 'next/config'
import Head from 'next/head'

type HeadProps = {
  global: Record<string, unknown>
}

const { publicRuntimeConfig } = getConfig()

const HeadComponent = (props: HeadProps): JSX.Element => {
  return (
    <Head>
      <title>{dataFieldUtils.getField(props.global, 'SiteName')}</title>
      <meta
        name="description"
        content={dataFieldUtils.getField(props.global, 'SEO')?.MetaDescription}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href={`${publicRuntimeConfig.CMS_URL}${dataFieldUtils.getField(
          dataFieldUtils.getField(props.global, 'FavIcon'),
          'url',
          true,
        )}`}
      />
    </Head>
  )
}

export default HeadComponent
