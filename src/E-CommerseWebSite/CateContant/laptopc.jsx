import React from "react";
import { Link } from "react-router-dom";
import Footer from "../JSXFile/Footer";

export default function Laptop() {
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
                  src="../../image/laptop/lap7.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="../../image/laptop/lap16.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="../../image/laptop/lap3.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="../../image/laptop/lap9.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="../../image/laptop/lap15.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../../image/laptop/lap14.jpg"
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
          <div
            className="wid-100 arrange-left"
            style={{ float: "right", width: "100" }}
          >
            <div className="wid-25 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/laptop/lap2.png" alt="" />
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
                  <img src="../../image/laptop/lap3.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Laptop Stylish</h6>
                  <div className="cart-price">
                    <h6 className="current">30,000</h6>
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
                  <img src="../../image/laptop/lap4.png" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Laptop</h6>
                  <div className="cart-price">
                    <h6 className="current">50,000</h6>
                    <h6 className="last">80,000</h6>
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
                  <img src="../../image/laptop/lap5.png" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Stylish Laptop</h6>
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
          </div>

          <div
            className="wid-100 arrange-left"
            style={{ float: "right", width: "100" }}
          >
            <div className="wid-25 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/laptop/lap6.png" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Phone</h6>
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
                  <img src="../../image/laptop/lap7.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Laptop's</h6>
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
                  <img src="../../image/laptop/lap8.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Laptop</h6>
                  <div className="cart-price">
                    <h6 className="current">25,000</h6>
                    <h6 className="last">29,000</h6>
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
                  <img src="../../image/laptop/lap15.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Laptop Stylish</h6>
                  <div className="cart-price">
                    <h6 className="current">30,000</h6>
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
                  <img src="../../image/laptop/lap13.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Laptop Stylish</h6>
                  <div className="cart-price">
                    <h6 className="current">30,000</h6>
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
                  <img src="../../image/laptop/lap14.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Laptop Stylish</h6>
                  <div className="cart-price">
                    <h6 className="current">30,000</h6>
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
                  <img src="../../image/laptop/lap10.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Laptop</h6>
                  <div className="cart-price">
                    <h6 className="current">27,000</h6>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
