import React from "react";
import { Link } from "react-router-dom";

export default function ContantSecond() {
  return (
    <div>
      <div className="wrapper next-row">
        <div className="wid-33 arrange-left">
          <div className="category-item">
            <div className="product-count">20 Products</div>
            <div className="category-img">
              <img src="../../Image/watch/watch11.jpg" alt="image" />
            </div>
            <div className="category-type">
              <h5>Men's Watch's</h5>
            </div>
          </div>
        </div>
        <div className="wid-33 arrange-left">
          <div className="category-item">
            <div className="product-count">80 Products</div>
            <div className="category-img">
              <img src="../../Image/phone/phone5.jpg" alt="image" />
            </div>
            <div className="category-type">
              <h5>Mobiles</h5>
            </div>
          </div>
        </div>
        <div className="wid-33 arrange-left">
          <div className="category-item">
            <div className="product-count">40 Products</div>
            <div className="category-img">
              <img src="../../Image/smarttv/tv10.jpg" alt="image" />
            </div>
            <div className="category-type">
              <h5>Smart TV's</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper next-row">
        <div className="wid-50 arrange-left">
          <div className="offer-banner">
            <img src="../../Image/cloth/cloth13.jpg" alt="image" />
            <div className="offer-text">
              <h5>20% off the all order</h5>
              <h3>Collection</h3>
              <Link to="/shop">
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="wid-50 arrange-left">
          <div className="offer-banner">
            <img
              className="flip-img"
              src="../../Image/watch/watch16.jpg"
              alt="image"
            />
            <div className="offer-text">
              <h5>30% off the all order</h5>
              <h3>Collection</h3>
              <Link to="/shop">
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper next-row">
        <div className="wid-25 arrange-left">
          <div className="cart">
            <div>
              <img src="../../Image/laptop/lap14.jpg" alt="image" />
            </div>
            <div className="cart-details">
              <h6 className="name-head">Laptop</h6>
              <div className="cart-price">
                <h6 className="current">50,000</h6>
                <h6 className="last">70,000</h6>
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
              <img src="../../Image/book/book16.webp" alt="image" />
            </div>
            <div className="cart-details">
              <h6 className="name-head">Book's</h6>
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
              <img src="../../Image/cloth/cloth15.jpg" alt="image" />
            </div>
            <div className="cart-details">
              <h6 className="name-head">Colorful Stylish</h6>
              <div className="cart-price">
                <h6 className="current">$130.00</h6>
                <h6 className="last">$140.00</h6>
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
              <img src="../../Image/phone/phone14.jpg" alt="image" />
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
  );
}
