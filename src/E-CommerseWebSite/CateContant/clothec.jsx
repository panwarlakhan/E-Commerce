import React from "react";
import { Link } from "react-router-dom";
import Footer from "../JSXFile/Footer";
import Size from "../Size";

export default function Clothe() {
  return (
    <>
      <div className="full-banner-warapper">
        <div className="banner">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="../../image/cloth/cloth6.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="../../image/cloth/cloth10.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="../../image/cloth/cloth7.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="../../image/cloth/cloth14.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="../../image/cloth/cloth3.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../../image/cloth/cloth16.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="wrapper next-row">
          <Size />
          <div className="wid-75 arrange-left" style={{ float: "right" }}>
            <div className="wid-33 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/cloth/cloth2.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Dress</h6>
                  <div className="cart-price">
                    <h6 className="current">2000</h6>
                    <h6 className="last">3000</h6>
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
            <div className="wid-33 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/cloth/cloth3.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Stylish</h6>
                  <div className="cart-price">
                    <h6 className="current">2300</h6>
                    <h6 className="last">3700</h6>
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
            <div className="wid-33 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/cloth/cloth4.jpg" alt="" />
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
            <div className="wid-33 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/cloth/cloth7.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Stylish</h6>
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
            <div className="wid-33 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/cloth/cloth5.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Stylish</h6>
                  <div className="cart-price">
                    <h6 className="current">3000</h6>
                    <h6 className="last">3800</h6>
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
            <div className="wid-33 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/cloth/cloth6.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Cloth</h6>
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
            <div className="wid-33 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/cloth/cloth7.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Dress</h6>
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
            <div className="wid-33 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/cloth/cloth8.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Clothe's</h6>
                  <div className="cart-price">
                    <h6 className="current">3000</h6>
                    <h6 className="last">6000</h6>
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
            <div className="wid-33 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/cloth/cloth9.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Dress</h6>
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
      <Footer />
    </>
  );
}
