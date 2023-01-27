import { useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout/Layout';
import ErrorContainer from '@/components/ErrorContainer/ErrorContainer';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Portfolio | Error</title>
      </Head>
      <Layout>
        <ErrorContainer />
      </Layout>
    </>
  );
};

export default Error;
