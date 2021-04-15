import React from "react";
import styl from "./Preloader.module.scss";

export const Preloader = () => {
  return (
    <div className={styl.preloader}>
      <div className={styl.loader}></div>
    </div>
  );
};
