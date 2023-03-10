import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import style from "./BaseLayout.module.css";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={`${style.mainContent}`}>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default BaseLayout;
