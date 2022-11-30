import React from "react";
import "./E-CommerseWebSite/CSSFile/common.css";
import "./E-CommerseWebSite/CSSFile/style.css";
import "./E-CommerseWebSite/CSSFile/about.css";
import "./E-CommerseWebSite/CSSFile/regform.css";
import "./E-CommerseWebSite/CSSFile/loginform.css";
import Header from "./E-CommerseWebSite/JSXFile/Header";
import Nav from "./E-CommerseWebSite/JSXFile/Nav";

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
    </div>
  );
}
