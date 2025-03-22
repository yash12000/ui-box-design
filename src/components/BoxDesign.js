import React from "react";
import "./BoxDesign.css";

const BoxDesign = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="red-box top-left"></div>
        <div className="red-box bottom-left"></div>
        <div className="red-box center"></div>
        <div className="black-box top-right"></div>
        <div className="black-box bottom-right"></div>
      </div>
    </div>
  );
};

export default BoxDesign;
