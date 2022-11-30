import React from "react";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo arrange-left wid-25">
          <h1>
            <span>E</span>
            <span>Comm</span>
          </h1>
        </div>
        <div className="search-product arrange-left wid-50">
          <input type="text" placeholder="Search for Products" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="selected-product arrange-left wid-25">
          <button className="common-btn">
            <span>
              <i className="fa-solid fa-cart-arrow-down"></i>0
            </span>
          </button>
          <button className="common-btn">
            <span>
              <i className="fa-solid fa-heart"></i>0
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
