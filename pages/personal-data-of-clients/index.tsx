import Head from 'next/head';

import Layout from '@/components/Layout/Layout';
import PolicyContent from '@/components/PolicyContent/PolicyContent';

const PersonalDataOfClients = () => (
  <>
    <Head>
      <title>Portfolio | Personal data of clients</title>
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
      <main className="main">
        <PolicyContent />
      </main>
    </Layout>
    <div className="background-animation">
      <div id="ball-one"></div>
      <div id="ball-two"></div>
      <div id="ball-three"></div>
    </div>
  </>
);

export default PersonalDataOfClients;
