import React from "react";
import ContantFirst from "./JSXFile/Contant1";
import ContantSecond from "./JSXFile/Contant2";
import ContantThree from "./JSXFile/Contant3";
import Footer from "./JSXFile/Footer";
import Slider from "./slider";

export default function Home() {
  return (
    <div>
      <div className="banner">
        <Slider />
      </div>
      <ContantFirst />
      <ContantSecond />
      <ContantThree />
      <Footer />
    </div>
  );
}
