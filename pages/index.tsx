import Head from 'next/head';

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';

import Portfolio from '@/components/Portfolio/Portfolio';
import Contact from '@/components/Contact/Contact';
import Layout from '@/components/Layout/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
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
