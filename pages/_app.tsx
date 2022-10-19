import { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

const App = ({ pageProps, Component }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>Example: Next.js</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
