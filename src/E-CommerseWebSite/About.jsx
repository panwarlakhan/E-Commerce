import React, { useState } from "react";
import Footer from "./JSXFile/Footer";
import Slider from "./slider";

export default function About() {
  let [user, setUser] = useState({
    name: "",
    lname: "",
    email: "",
    cont: "",
    sub: "",
  });

  const conGetData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const conSubmitData = async (e) => {
    e.preventDefault();
    const log = await fetch(
      "https://react-form-115c4-default-rtdb.firebaseio.com/react-formData.json",
      {
        method: "post",
        header: "Content-Type : Application/json",
        body: JSON.stringify({
          name: user.name,
          lname: user.lname,
          email: user.email,
          cont: user.cont,
          sub: user.sub,
        }),
      }
    );
    if (log) {
      setUser({
        name: "",
        lname: "",
        email: "",
        cont: "",
        sub: "",
      });
      alert("your form is succesfully submit");
    }
  };
  return (
    <div>
      <div className="banner">
        <Slider />
      </div>
      <div className="row1">
        <div className="colum">
          <div className="card">
            <div className="conl">
              <h2 className="head">Jane Doe</h2>
              <h3 className="title">Start a trial</h3>
              <p>
                Build a store that caters to your unique business needs—with the
                design tools, features, and support to get you up and running.
              </p>
              <p>jane@example.com</p>
              <p>
                <button className="rbtn">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="colum">
          <div className="card">
            <div className="conl">
              <h2 className="head">Mike Ross</h2>
              <h3 className="title">Grow your business</h3>
              <p>
                Build your brand with a storefront designed to jumpstart growth,
                from your very first sale onward. from your very first sale
                onward.
              </p>
              <p>mike@example.com</p>
              <p>
                <button className="rbtn">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="colum">
          <div className="card">
            <div className="conl">
              <h2 className="head">John Doe</h2>
              <h3 className="title">Launch your store</h3>
              <p>
                Design and customize a beautiful storefront with powerful
                features and expert ecommerce support along the way.
              </p>
              <p>john@example.com</p>
              <p>
                <button className="rbtn">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cont">
        <form action="">
          <h2 style={{ textalign: "center", marginLeft: "10%" }}>Contact Us</h2>
          <label for="fname">First Name</label>
          <input
            type="text"
            className="lname"
            placeholder="Your name.."
            name="name"
            value={user.name}
            onChange={conGetData}
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            className="lname"
            placeholder="Your last name.."
            name="lname"
            value={user.lname}
            onChange={conGetData}
          />

          <label for="lname">Email</label>
          <input
            type="email"
            className="lname"
            placeholder="Your Email.."
            name="email"
            value={user.email}
            onChange={conGetData}
          />

          <label for="lname">Contact</label>
          <input
            type="tel"
            className="lname"
            placeholder="Your Contact.."
            name="cont"
            value={user.cont}
            onChange={conGetData}
          />

          <label for="subject">Subject</label>
          <textarea
            className="lname"
            name="sub"
            value={user.sub}
            onChange={conGetData}
            placeholder="Write something.."
            style={{ height: "200px" }}
          ></textarea>

          <input
            type="submit"
            value="Submit"
            className="rbtn"
            style={{ width: "25%" }}
            onClick={conSubmitData}
          />
        </form>
        <div className="about-sec">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
          <p className="par">
            Whether you’re just starting out or an established high-volume
            business, our ecommerce platform has the features you’ll need to
            empower your online growth. Help customers cross the finish line
            with a seamless path to purchase and advanced marketing tools.
            Leverage our Page Builder tool to get your store up and running
            faster and make quick changes to your site, no coding required
            Streamline checkout with optimized one page checkout and win back
            customers with shopping cart recovery Put your products’ best foot
            forward with native Google AMP and optimized images via Akamai Image
            Manager
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
