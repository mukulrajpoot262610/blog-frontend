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
      {!path.includes('auth') && <Navbar />}
      <main className="w-11/12 min-h-screen mx-auto">{children}</main>
      <Toaster />
      {!path.includes('auth') && <Footer />}
    </>
  );
};

export default Layout;
