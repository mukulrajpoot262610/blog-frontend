import Head from 'next/dist/shared/lib/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useLoadingWithRefresh } from '../../hooks/useLoadingWithRefresh';
import Footer from './Footer';
import Loader from './Loader';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const router = useRouter();
  const { loading } = useLoadingWithRefresh();

  const path = router.pathname;

  return loading ? (
    <Loader />
  ) : (
    <>
      <Head>
        <title>SUDO</title>
      </Head>
      {!path.includes('auth') && <Navbar />}
      <main className="container min-h-screen">{children}</main>
      <Toaster />
      {!path.includes('auth') && <Footer />}
    </>
  );
};

export default Layout;
