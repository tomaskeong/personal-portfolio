import Head from 'next/head'

type HeadProps = {
  title?: string
}

const HeadComponent = ({
  title = 'Tomás Keong | Personal Website',
}: HeadProps): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Website containing Tomás Keong's information such as professional experience, education, skills, resume and certifications."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadComponent
