import React from "react";
import { Link } from "react-router-dom";
import Footer from "./JSXFile/Footer";
import Slider from "./slider";

export default function Shop() {
  return (
    <div>
      <div className="full-banner-warapper">
        <div className="banner">
          <Slider />
        </div>

        <div className="wrapper next-row">
          <div
            className="wid-100 arrange-left"
            style={{ float: "right", width: "100" }}
          >
            <div className="wid-25 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/laptop/lap5.png" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Laptop</h6>
                  <div className="cart-price">
                    <h6 className="current">23,000</h6>
                    <h6 className="last">30,000</h6>
                  </div>
                </div>
                <div className="cart-footer">
                  <Link to="/account">
                    <i className="fa-solid fa-eye"></i>
                    View Details
                  </Link>
                  <Link to="/account">
                    <i className="fa-solid fa-cart-arrow-down"></i>
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
            <div className="wid-25 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/smarttv/tv14.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Smart TV</h6>
                  <div className="cart-price">
                    <h6 className="current">23,000</h6>
                    <h6 className="last">37,000</h6>
                  </div>
                </div>
                <div className="cart-footer">
                  <Link to="/account">
                    <i className="fa-solid fa-eye"></i>
                    View Details
                  </Link>
                  <Link to="/account">
                    <i className="fa-solid fa-cart-arrow-down"></i>
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
            <div className="wid-25 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/cloth/cloth10.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Cloth</h6>
                  <div className="cart-price">
                    <h6 className="current">$500.00</h6>
                    <h6 className="last">$800.00</h6>
                  </div>
                </div>
                <div className="cart-footer">
                  <Link to="/account">
                    <i className="fa-solid fa-eye"></i>
                    View Details
                  </Link>
                  <Link to="/account">
                    <i className="fa-solid fa-cart-arrow-down"></i>
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
            <div className="wid-25 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/watch/watch16.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Watch</h6>
                  <div className="cart-price">
                    <h6 className="current">$123.00</h6>
                    <h6 className="last">$130.00</h6>
                  </div>
                </div>
                <div className="cart-footer">
                  <Link to="/account">
                    <i className="fa-solid fa-eye"></i>
                    View Details
                  </Link>
                  <Link to="/account">
                    <i className="fa-solid fa-cart-arrow-down"></i>
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
            <div />

            <div
              className="wid-100 arrange-left"
              style={{ float: "right", width: "100" }}
            >
              <div className="wid-25 arrange-left">
                <div className="cart">
                  <div>
                    <img src="../../image/phone/phone13.jpg" alt="" />
                  </div>
                  <div className="cart-details">
                    <h6 className="name-head">Colorful Stylish</h6>
                    <div className="cart-price">
                      <h6 className="current">30,000</h6>
                      <h6 className="last">38,000</h6>
                    </div>
                  </div>
                  <div className="cart-footer">
                    <Link to="/account">
                      <i className="fa-solid fa-eye"></i>
                      View Details
                    </Link>
                    <Link to="/account">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="wid-25 arrange-left">
                <div className="cart">
                  <div>
                    <img src="../../image/book/book14.jpg" alt="" />
                  </div>
                  <div className="cart-details">
                    <h6 className="name-head">Colorful Book's</h6>
                    <div className="cart-price">
                      <h6 className="current">$123.00</h6>
                      <h6 className="last">$130.00</h6>
                    </div>
                  </div>
                  <div className="cart-footer">
                    <Link to="/account">
                      <i className="fa-solid fa-eye"></i>
                      View Details
                    </Link>
                    <Link to="/account">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="wid-25 arrange-left">
                <div className="cart">
                  <div>
                    <img src="../../image/watch/watch5.jpg" alt="" />
                  </div>
                  <div className="cart-details">
                    <h6 className="name-head">Colorful Watch</h6>
                    <div className="cart-price">
                      <h6 className="current">$200.00</h6>
                      <h6 className="last">$290.00</h6>
                    </div>
                  </div>
                  <div className="cart-footer">
                    <Link to="/account">
                      <i className="fa-solid fa-eye"></i>
                      View Details
                    </Link>
                    <Link to="/account">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="wid-25 arrange-left">
                <div className="cart">
                  <div>
                    <img src="../../image/laptop/lap9.jpg" alt="" />
                  </div>
                  <div className="cart-details">
                    <h6 className="name-head">Laptop's</h6>
                    <div className="cart-price">
                      <h6 className="current">30,000</h6>
                      <h6 className="last">60,000</h6>
                    </div>
                  </div>
                  <div className="cart-footer">
                    <Link to="/account">
                      <i className="fa-solid fa-eye"></i>
                      View Details
                    </Link>
                    <Link to="/account">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="wid-100 arrange-left"
              style={{ float: "right", width: "100" }}
            >
              <div className="wid-25 arrange-left">
                <div className="cart">
                  <div>
                    <img src="../../image/smarttv/tv8.jpg" alt="" />
                  </div>
                  <div className="cart-details">
                    <h6 className="name-head">Colorful Smart Tv</h6>
                    <div className="cart-price">
                      <h6 className="current">$123.00</h6>
                      <h6 className="last">$130.00</h6>
                    </div>
                  </div>
                  <div className="cart-footer">
                    <Link to="/account">
                      <i className="fa-solid fa-eye"></i>
                      View Details
                    </Link>
                    <Link to="/account">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="wid-25 arrange-left">
                <div className="cart">
                  <div>
                    <img src="../../image/phone/phone8.jpg" alt="" />
                  </div>
                  <div className="cart-details">
                    <h6 className="name-head">Colorful Smart Phone</h6>
                    <div className="cart-price">
                      <h6 className="current">$123.00</h6>
                      <h6 className="last">$130.00</h6>
                    </div>
                  </div>
                  <div className="cart-footer">
                    <Link to="/account">
                      <i className="fa-solid fa-eye"></i>
                      View Details
                    </Link>
                    <Link to="/account">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="wid-25 arrange-left">
                <div className="cart">
                  <div>
                    <img src="../../image/watch/watch8.jpg" alt="" />
                  </div>
                  <div className="cart-details">
                    <h6 className="name-head">Colorful Smart Watch</h6>
                    <div className="cart-price">
                      <h6 className="current">$123.00</h6>
                      <h6 className="last">$130.00</h6>
                    </div>
                  </div>
                  <div className="cart-footer">
                    <Link to="/account">
                      <i className="fa-solid fa-eye"></i>
                      View Details
                    </Link>
                    <Link to="/account">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="wid-25 arrange-left">
                <div className="cart">
                  <div>
                    <img src="../../image/cloth/cloth8.jpg" alt="" />
                  </div>
                  <div className="cart-details">
                    <h6 className="name-head">Colorful Clothe</h6>
                    <div className="cart-price">
                      <h6 className="current">$123.00</h6>
                      <h6 className="last">$130.00</h6>
                    </div>
                  </div>
                  <div className="cart-footer">
                    <Link to="/account">
                      <i className="fa-solid fa-eye"></i>
                      View Details
                    </Link>
                    <Link to="/account">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
