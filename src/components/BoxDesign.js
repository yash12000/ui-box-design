import React from "react";
import "./BoxDesign.css";

const BoxDesign = () => {
  return (
    <div class="container">
      <div class="box">
        <div class="red-box top-left"></div>
        <div class="red-box bottom-left"></div>
        <div class="black-box top-right"></div>
        <div class="black-box bottom-right"></div>
        <div class="center"></div>
      </div>
    </div>
  );
};

export default BoxDesign;
