import React from "react";
import { Link } from "react-router-dom";
import Footer from "../JSXFile/Footer";

export default function Mobile() {
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
                  src="../../image/phone/phone14.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="../../image/phone/phone3.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="../../image/phone/phone9.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="../../image/phone/phone11.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="../../image/phone/phone2.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../../image/phone/phone12.jpg"
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
                  <img src="../../Image/phone/phone2.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Phone</h6>
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
                  <img src="../../Image/phone/phone3.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Stylish Phone</h6>
                  <div className="cart-price">
                    <h6 className="current">20,000</h6>
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
                  <img src="../../Image/phone/phone4.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Phone</h6>
                  <div className="cart-price">
                    <h6 className="current">20,000</h6>
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
                  <img src="../../Image/phone/phone5.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Stylish Phone</h6>
                  <div className="cart-price">
                    <h6 className="current">19,000</h6>
                    <h6 className="last">33,000</h6>
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
                  <img src="../../Image/phone/phone6.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Stylish Phone</h6>
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
                  <img src="../../Image/phone/phone7.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Phone's</h6>
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
                  <img src="../../Image/phone/phone8.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Watch</h6>
                  <div className="cart-price">
                    <h6 className="current">20,000</h6>
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
                  <img src="../../Image/phone/phone9.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Phone's</h6>
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
                  <img src="../../Image/phone/phone14.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Stylish Phone</h6>
                  <div className="cart-price">
                    <h6 className="current">20,000</h6>
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
                  <img src="../../Image/phone/phone12.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Stylish Phone</h6>
                  <div className="cart-price">
                    <h6 className="current">20,000</h6>
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
                  <img src="../../Image/phone/phone13.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Stylish Phone</h6>
                  <div className="cart-price">
                    <h6 className="current">20,000</h6>
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
                  <img src="../../Image/phone/phone10.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Phone's</h6>
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
        </div>
      </div>
      <Footer />
    </>
  );
}
