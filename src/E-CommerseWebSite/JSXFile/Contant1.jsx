import React from "react";

export default function ContantFirst() {
  return (
    <div>
      <div className="wrapper next-row">
        <div className="wid-25 arrange-left">
          <div className="features-point">
            <span className="icon-text-wrap">
              <i className="fa-solid fa-check"></i>
              <span> Quality Products</span>
            </span>
          </div>
        </div>
        <div className="wid-25 arrange-left">
          <div className="features-point">
            <span className="icon-text-wrap">
              <i className="fa-solid fa-shipping-fast"></i>
              <span> Free Shipping</span>
            </span>
          </div>
        </div>
        <div className="wid-25 arrange-left">
          <div className="features-point">
            <span className="icon-text-wrap">
              <i className="fa-solid fa-exchange-alt"></i>
              <span>14 Days Return</span>
            </span>
          </div>
        </div>
        <div className="wid-25 arrange-left">
          <div className="features-point">
            <span className="icon-text-wrap">
              <i className="fa-solid fa-phone-volume"></i>
              <span>24/7 Support</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
