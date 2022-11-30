import React, { useState } from "react";

export default function Register() {
  let [user, setUser] = useState({
    name: "",
    lname: "",
    email: "",
    pass: "",
    cpass: "",
    phone: "",
  });

  const regGetData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const regSubmitData = async (e) => {
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
          pass: user.pass,
          cpass: user.cpass,
          phone: user.phone,
        }),
      }
    );
    if (log) {
      setUser({
        name: "",
        lname: "",
        email: "",
        pass: "",
        cpass: "",
        phone: "",
      });
      alert("your form is succesfully submit");
    }
  };
  return (
    <div>
      <form className="r-form">
        <h2>Register Form</h2>
        <label>Enter Your Name</label>
        <div className="input-container">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={user.name}
            onChange={regGetData}
          />
        </div>

        <label>Enter Last Name</label>
        <div className="input-container">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Last Name"
            name="lname"
            value={user.lname}
            onChange={regGetData}
          />
        </div>

        <label>Enter Your Email </label>
        <div className="input-container">
          <input
            className="input-field"
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={user.email}
            onChange={regGetData}
          />
        </div>

        <label>Enter Your Password</label>
        <div className="input-container">
          <input
            className="input-field"
            type="password"
            placeholder="Enter Password"
            name="pass"
            value={user.pass}
            onChange={regGetData}
          />
        </div>
        <label>Enter Confirm Password</label>
        <div className="input-container">
          <input
            className="input-field"
            type="password"
            placeholder="Enter Password"
            name="cpass"
            value={user.cpass}
            onChange={regGetData}
          />
        </div>
        <label>Enter Phone Number</label>
        <div className="input-container">
          <input
            className="input-field"
            type="tel"
            placeholder="Enter Phone Number"
            name="phone"
            value={user.phone}
            onChange={regGetData}
          />
        </div>

        <button type="submit" className="rbtn" onClick={regSubmitData}>
          Register
        </button>
        <button type="reset" className="rbtn">
          Reset
        </button>
      </form>
    </div>
  );
}
