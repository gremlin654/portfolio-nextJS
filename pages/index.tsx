import Head from 'next/head';

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';

import Portfolio from '@/components/Portfolio/Portfolio';
import Contact from '@/components/Contact/Contact';
import Layout from '@/components/Layout/Layout';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
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
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </Layout>
    </>
  );
}
