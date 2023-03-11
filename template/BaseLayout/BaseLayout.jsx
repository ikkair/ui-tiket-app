import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import style from "./BaseLayout.module.css";

const BaseLayout = ({ children }) => {

  const urlPath = window.location.pathname
  const optionalPathUrl = ['/profile', '/my-booking']

  return (
    <>
      <Navbar />
      <main className={`
      ${optionalPathUrl.includes(urlPath) ? style.mainContentOptional : style.mainContent }
      ${urlPath == '/' || urlPath == '/home' ? 'bg-light' : ''}
      `}>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default BaseLayout;
