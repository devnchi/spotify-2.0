import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';
import  Provider  from './api/[...nextauth]'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      
      <SessionProvider session={pageProps.session}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </>
  )
}

export default MyApp