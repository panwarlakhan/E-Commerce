import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "../About";
import Card from "../Account";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import Shop from "../Shop";
import Book from "../CateContant/bookc";
import Clothe from "../CateContant/clothec";
import Laptop from "../CateContant/laptopc";
import Mobile from "../CateContant/mobilec";
import SmartTv from "../CateContant/smartc";
import Watch from "../CateContant/watchc";

export default function Nav() {
  return (
    <div className="full-banner-warapper">
      <div className="wrapper next-row">
        <div className="banner-area category-list arrange-left wid-25">
          <div className="list-head">
            <h4>Categories</h4>
            <span>
              <i className="fa-solid fa-angle-down"></i>
            </span>
          </div>
          <ul>
            <li>
              <Link to="/laptopc">Laptops</Link>
            </li>
            <li>
              <Link to="/mobilec">Mobiles</Link>
            </li>
            <li>
              <Link to="/clothec">Clothes</Link>
            </li>
            <li>
              <Link to="/smartc">Smart Tv</Link>
            </li>
            <li>
              <Link to="/bookc">Books</Link>
            </li>
            <li>
              <Link to="/watchc">Watchs</Link>
            </li>
          </ul>
        </div>
        <div className="wid-75 arrange-left">
          <div className="shop-menu">
            <ul className="left-menu-list">
              <li>
                <Link className="use-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="use-link" to="/Shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="use-link" to="/Account">
                  Account Details
                </Link>
              </li>
              <li>
                <Link className="use-link" to="/About">
                  About Us
                </Link>
              </li>
            </ul>
            <ul className="right-menu-list">
              <li>
                <Link className="use-link" to="/Login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="use-link" to="/Register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Account" element={<Card />} />
        <Route path="/About" element={<About />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/laptopc" element={<Laptop />} />
        <Route path="/mobilec" element={<Mobile />} />
        <Route path="/clothec" element={<Clothe />} />
        <Route path="/smartc" element={<SmartTv />} />
        <Route path="/bookc" element={<Book />} />
        <Route path="/watchc" element={<Watch />} />
      </Routes>
    </div>
  );
}
