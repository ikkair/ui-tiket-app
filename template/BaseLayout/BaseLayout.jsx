import React from 'react';
import Footer from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import style from './BaseLayout.module.css';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={`${style.mainContent}`}>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
