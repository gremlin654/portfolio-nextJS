import { GetStaticProps } from 'next';
import Head from 'next/head';

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Portfolio from '@/components/Portfolio/Portfolio';
import Contact from '@/components/Contact/Contact';
import Layout from '@/components/Layout/Layout';
import { IProject } from '@/types/types';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/projects/`);
    const data = (await response.json()) as Promise<IProject[]>;

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { projects: data, fallback: false },
    };
  } catch {
    return {
      props: { projects: null, fallback: false },
    };
  }
};

interface IHomeProps {
  projects: IProject[] | null;
}

const Home = ({ projects }: IHomeProps) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Portfolio projects={projects} />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
