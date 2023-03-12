import React from "react";
import BaseTemplate from "../BaseLayout/BaseLayout";
import style from "./DoubleSideLayout.module.css";

const DoubleSideLayout = ({ children, leftside, classLeft, classRight, className }) => {

  return (
    <BaseTemplate>
      <div
        className={`container pt-4 ${className}`}
      >
        <div className={"row"}>
          <div className={`${style.leftSide} ${classLeft}`}>{leftside}</div>
          <div className={`${style.leftSide} ${classRight}`}>{children}</div>
        </div>
      </div>
    </BaseTemplate>
  );
};

export default DoubleSideLayout;
