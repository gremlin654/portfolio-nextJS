import Head from 'next/head';

import PolicyContent from '@/components/PolicyContent/PolicyContent';
import Layout from '@/components/Layout/Layout';

export const CookiePolicy = () => (
  <>
    <Head>
      <title>Portfolio | Cookie Policy</title>
    </Head>
    <Layout>
      <PolicyContent />
    </Layout>
  </>
);

export default CookiePolicy;
