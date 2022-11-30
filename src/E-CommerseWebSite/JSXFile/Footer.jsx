import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  let [user, setUser] = useState({
    name: "",
    email: "",
  });

  const getData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://react-form-115c4-default-rtdb.firebaseio.com/react-formData.json",
      {
        method: "post",
        header: "Content-Type : Application/json",
        body: JSON.stringify({
          name: user.name,
          email: user.email,
        }),
      }
    );
    if (res) {
      setUser({
        name: "",
        email: "",
      });
      alert("your form is succesfully submit");
    }
  };
  return (
    <>
      <div className="wrapper next-row">
        <div className="footer">
          <div className="wid-25 arrange-left margin-right-5">
            <div className="logo">
              <h1>
                <span>E</span>
                <span>Comm</span>
              </h1>
            </div>
            <p className="footer-desc">
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum
              no sit erat lorem et magna ipsum dolore amet erat.
            </p>
            <ul className="contact-list">
              <li>
                <Link className="line" to="">
                  <i className="fa fa-map-marker-alt icon"></i>123 Street,New
                  York, USA
                </Link>
              </li>
              <li>
                <Link className="line" to="">
                  <i className="fa fa-envelope icon"></i>info@example.com
                </Link>
              </li>
              <li>
                <Link className="line" to="">
                  <i className="fa fa-phone icon"></i>+012 345 67890
                </Link>
              </li>
            </ul>
          </div>
          <div className="wid-25 quick-links arrange-left">
            <h3>Quick Links</h3>
            <ul>
              <Link to="/home">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/account">Account Details</Link>
              <Link to="/about">About Us</Link>
              <ul className="right-menu-list">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </ul>
            </ul>
          </div>
          <div className="wid-25 quick-links arrange-left"></div>
          <div className="wid-25 arrange-left">
            <h3 className="sub">Subscribe</h3>
            <form method="post">
              <input
                type="text"
                name="name"
                value={user.name}
                className="footer-input"
                placeholder="Enter Name"
                onChange={getData}
              />
              <input
                type="email"
                name="email"
                value={user.email}
                className="footer-input"
                placeholder="Enter Email"
                onChange={getData}
              />
              <button className="footer-button" onClick={submitData}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
