import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ToastContainer } from 'react-toastify';
import NextNProgress from 'nextjs-progressbar';

import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Portfolio Sidelnikov Andrey Front-end developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/assets/images/svg/logo.svg"
        />
      </Head>
      <NextNProgress />
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
    </>
  );
}
