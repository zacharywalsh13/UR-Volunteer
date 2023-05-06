import React from 'react';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;