import React, { useState } from "react";
import Footer from "./JSXFile/Footer";
import Slider from "./slider";

export default function Card() {
  // inc and dec
  const [c1, setC1] = useState(2);
  const [c2, setC2] = useState(7);
  const [c3, setC3] = useState(3);
  const [c4, setC4] = useState(5);
  const [c5, setC5] = useState(4);

  let [apply, setApply] = useState({
    apply: "",
  });

  const applyData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setApply({ ...apply, [name]: value });
  };

  const applySubmit = async (e) => {
    e.preventDefault();
    const app = await fetch(
      "https://react-form-115c4-default-rtdb.firebaseio.com/react-formData.json",
      {
        method: "post",
        header: "Content-Type : Application/json",
        body: JSON.stringify({
          name: apply.name,
        }),
      }
    );
    if (app) {
      setApply({
        apply: "",
      });
      alert("Your Enter Couple is Successfull");
    }
  };

  return (
    <div>
      <div className="full-banner-warapper">
        <div className="banner">
          <Slider />
        </div>

        <div className="wrapper next-row">
          <div className="wid-75 arrange-left">
            <div className="cart-details">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-with-img">
                      <img src="../../image/laptop/lap1.jpg" alt="bannar" />
                      <span>Product-1</span>
                    </td>
                    <td>
                      <span>$150</span>
                    </td>
                    <td>
                      <div className="quantity-input">
                        <button
                          onClick={() => {
                            setC1(c1 - 1);
                          }}
                        >
                          -
                        </button>
                        <span>{c1}</span>
                        <button
                          onClick={() => {
                            setC1(c1 + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>$150</td>
                    <td>
                      <i className="fa fa-remove icon custom-delete-button"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-with-img">
                      <img src="../../image/smarttv/tv1.jpg" alt="banner" />
                      <span>Product-2</span>
                    </td>
                    <td>
                      <span>$350</span>
                    </td>
                    <td>
                      <div className="quantity-input">
                        <button
                          onClick={() => {
                            setC2(c2 - 1);
                          }}
                        >
                          -
                        </button>
                        <span>{c2}</span>
                        <button
                          onClick={() => {
                            setC2(c2 + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>$700</td>
                    <td>
                      <i className="fa fa-remove icon custom-delete-button"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-with-img">
                      <img src="../../image/watch/watch4.jpg" alt="banner" />
                      <span>Product-3</span>
                    </td>
                    <td>
                      <span>$100</span>
                    </td>
                    <td>
                      <div className="quantity-input">
                        <button
                          onClick={() => {
                            setC3(c3 - 1);
                          }}
                        >
                          -
                        </button>
                        <span>{c3}</span>
                        <button
                          onClick={() => {
                            setC3(c3 + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>$100</td>
                    <td>
                      <i className="fa fa-remove icon custom-delete-button"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-with-img">
                      <img src="../../image/phone/phone7.jpg" alt="banner" />
                      <span>Product-4</span>
                    </td>
                    <td>
                      <span>$150</span>
                    </td>
                    <td>
                      <div className="quantity-input">
                        <button
                          onClick={() => {
                            setC4(c4 - 1);
                          }}
                        >
                          -
                        </button>
                        <span>{c4}</span>
                        <button
                          onClick={() => {
                            setC4(c4 + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>$150</td>
                    <td>
                      <i className="fa fa-remove icon custom-delete-button"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-with-img">
                      <img src="../../image/book/book8.jpg" alt="banner" />
                      <span>Product-5</span>
                    </td>
                    <td>
                      <span>$150</span>
                    </td>
                    <td>
                      <div className="quantity-input">
                        <button
                          onClick={() => {
                            setC5(c5 - 1);
                          }}
                        >
                          -
                        </button>
                        <span>{c5}</span>
                        <button
                          onClick={() => {
                            setC5(c5 + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>$150</td>
                    <td>
                      <i className="fa fa-remove icon custom-delete-button"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="wid-25 arrange-left">
            <div className="cart-summary-wrapper">
              <div className="coupon-inputs">
                <input
                  type="text"
                  placeholder="Enter Couple"
                  name="name"
                  value={apply.name}
                  onChange={applyData}
                />
                <button type="submit" onClick={applySubmit}>
                  Apply Couple
                </button>
              </div>
              <div className="cart-summary-body">
                <div className="cart-summy-item">
                  <h6>Sub Total</h6>
                  <h6>$150</h6>
                </div>
                <div className="cart-summy-item">
                  <h6>Shipping</h6>
                  <h6>$100</h6>
                </div>
              </div>
              <div className="total-wrapper">
                <div className="total-head">
                  <h4>Total</h4>
                  <h4>$250</h4>
                </div>
                <div className="proceed-input">
                  <button>Proceed To Checkout</button>
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
