import Head from 'next/head';

import Layout from '@/components/Layout/Layout';
import PolicyContent from '@/components/PolicyContent/PolicyContent';

const PersonalDataOfClients = () => (
  <>
    <Head>
      <title>Portfolio | Personal data of clients</title>
    </Head>
    <Layout>
      <main className="main">
        <PolicyContent />
      </main>
    </Layout>
  </>
);

export default PersonalDataOfClients;
