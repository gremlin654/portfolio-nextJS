import Head from 'next/head';

import Layout from '@/components/Layout/Layout';
import PolicyContent from '@/components/PolicyContent/PolicyContent';

const PersonalDataPrivacy = () => (
  <>
    <Head>
      <title>Portfolio | Personal data privacy</title>
    </Head>
    <Layout>
      <PolicyContent />
    </Layout>
  </>
);

export default PersonalDataPrivacy;
