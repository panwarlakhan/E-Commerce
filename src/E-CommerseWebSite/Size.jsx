import React from "react";

export default function Size() {
  return (
    <div>
      <div className="wid-25 arrange-left">
        <h3>Filter By Price</h3>
        <div className="custom-control-check">
          <input
            type="checkbox"
            className="custom-control-input"
            id="price-all"
          />
          <label className="custom-control-label" for="price-all">
            All Price
          </label>
          <span className="filter-prod-count">1000</span>
        </div>
        <div className="custom-control-check">
          <input type="checkbox" className="custom-control-input" id="0-100" />
          <label className="custom-control-label" for="0-100">
            $0 - $100
          </label>
          <span className="filter-prod-count">100</span>
        </div>
        <div className="custom-control-check">
          <input
            type="checkbox"
            className="custom-control-input"
            id="100-200"
          />
          <label className="custom-control-label" for="100-200">
            $100 - $200
          </label>
          <span className="filter-prod-count">150</span>
        </div>
        <div className="custom-control-check">
          <input
            type="checkbox"
            className="custom-control-input"
            id="200-300"
          />
          <label className="custom-control-label" for="200-300">
            $200 - $300
          </label>
          <span className="filter-prod-count">160</span>
        </div>
        <div className="custom-control-check">
          <input
            type="checkbox"
            className="custom-control-input"
            id="300-above"
          />
          <label className="custom-control-label" for="300-above">
            $300 - $above
          </label>
          <span className="filter-prod-count">500</span>
        </div>
        <h3>Filter By Color</h3>
        <div className="custom-control-check">
          <input
            type="checkbox"
            className="custom-control-input"
            id="color-all"
          />
          <label className="custom-control-label" for="color-all">
            All Color
          </label>
          <span className="filter-prod-count">1000</span>
        </div>
        <div className="custom-control-check">
          <input type="checkbox" className="custom-control-input" id="black" />
          <label className="custom-control-label" for="black">
            Black
          </label>
          <span className="filter-prod-count">200</span>
        </div>
        <div className="custom-control-check">
          <input type="checkbox" className="custom-control-input" id="red" />
          <label className="custom-control-label" for="Red">
            Red
          </label>
          <span className="filter-prod-count">150</span>
        </div>
        <div className="custom-control-check">
          <input type="checkbox" className="custom-control-input" id="yellow" />
          <label className="custom-control-label" for="yellow">
            Yellow
          </label>
          <span className="filter-prod-count">360</span>
        </div>
        <div className="custom-control-check">
          <input type="checkbox" className="custom-control-input" id="white" />
          <label className="custom-control-label" for="white">
            White
          </label>
          <span className="filter-prod-count">300</span>
        </div>
        <h3>Filter By Size</h3>
        <div className="custom-control-check">
          <input type="checkbox" className="custom-control-input" id="small" />
          <label className="custom-control-label" for="small">
            Small
          </label>
          <span className="filter-prod-count">1000</span>
        </div>
        <div className="custom-control-check">
          <input type="checkbox" className="custom-control-input" id="m" />
          <label className="custom-control-label" for="m">
            Medium
          </label>
          <span className="filter-prod-count">140</span>
        </div>
        <div className="custom-control-check">
          <input type="checkbox" className="custom-control-input" id="l" />
          <label className="custom-control-label" for="l">
            Large
          </label>
          <span className="filter-prod-count">450</span>
        </div>
        <div className="custom-control-check">
          <input type="checkbox" className="custom-control-input" id="xl" />
          <label className="custom-control-label" for="xl">
            Extra Large
          </label>
          <span className="filter-prod-count">130</span>
        </div>
        <div className="custom-control-check">
          <input type="checkbox" className="custom-control-input" id="xxl" />
          <label className="custom-control-label" for="xxl">
            XXL
          </label>
          <span className="filter-prod-count">50</span>
        </div>
      </div>
    </div>
  );
}
