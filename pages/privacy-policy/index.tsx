import Head from 'next/head';

import Layout from '@/components/Layout/Layout';
import PolicyContent from '@/components/PolicyContent/PolicyContent';

const PrivacyPolicy = () => (
  <>
    <Head>
      <title>Portfolio | Privacy policy</title>
    </Head>
    <Layout>
      <PolicyContent />
    </Layout>
  </>
);

export default PrivacyPolicy;
