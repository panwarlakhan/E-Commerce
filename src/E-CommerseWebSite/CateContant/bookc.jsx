import React from "react";
import { Link } from "react-router-dom";
import Footer from "../JSXFile/Footer";

export default function Book() {
  return (
    <div>
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
                  src="../../image/book/book6.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="../../image/book/book11.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="../../image/book/book12.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="../../image/book/book12.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="../../image/book/book13.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../../image/book/book14.jpg"
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
                  <img src="../../image/book/book2.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Books</h6>
                  <div className="cart-price">
                    <h6 className="current">200</h6>
                    <h6 className="last">300</h6>
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
                  <img src="../../image/book/book3.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Stylish Books</h6>
                  <div className="cart-price">
                    <h6 className="current">2300</h6>
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
            <div className="wid-25 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/book/book4.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful</h6>
                  <div className="cart-price">
                    <h6 className="current">$200.00</h6>
                    <h6 className="last">$300.00</h6>
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
                  <img src="../../image/book/book5.jpg" alt="" />
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
          </div>

          <div
            className="wid-100 arrange-left"
            style={{ float: "right", width: "100" }}
          >
            <div className="wid-25 arrange-left">
              <div className="cart">
                <div>
                  <img src="../../image/book/book6.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Stylish</h6>
                  <div className="cart-price">
                    <h6 className="current">300</h6>
                    <h6 className="last">800</h6>
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
                  <img src="../../image/book/book7.jpg" alt="" />
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
                  <img src="../../image/book/book8.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Colorful Books</h6>
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
                  <img src="../../image/book/book9.jpg" alt="" />
                </div>
                <div className="cart-details">
                  <h6 className="name-head">Books</h6>
                  <div className="cart-price">
                    <h6 className="current">300</h6>
                    <h6 className="last">600</h6>
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

            <div
              className="wid-100 arrange-left"
              style={{ float: "right", width: "100" }}
            >
              <div className="wid-25 arrange-left">
                <div className="cart">
                  <div>
                    <img src="../../image/book/book13.jpg" alt="" />
                  </div>
                  <div className="cart-details">
                    <h6 className="name-head">Books</h6>
                    <div className="cart-price">
                      <h6 className="current">300</h6>
                      <h6 className="last">600</h6>
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
                    <img src="../../image/book/book12.jpg" alt="" />
                  </div>
                  <div className="cart-details">
                    <h6 className="name-head">Books</h6>
                    <div className="cart-price">
                      <h6 className="current">300</h6>
                      <h6 className="last">600</h6>
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
                    <img src="../../image/book/book11.jpg" alt="" />
                  </div>
                  <div className="cart-details">
                    <h6 className="name-head">Books</h6>
                    <div className="cart-price">
                      <h6 className="current">300</h6>
                      <h6 className="last">600</h6>
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
                    <img src="../../image/book/book10.jpg" alt="" />
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
