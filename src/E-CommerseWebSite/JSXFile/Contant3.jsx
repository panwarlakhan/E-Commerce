import React, { useState } from "react";

export default function ContantThree() {
  let [user, setUser] = useState({
    name: ""
  });

  const updateGetData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const updateSubmitData = async (e) => {
    e.preventDefault();
    const up = await fetch(
      "https://react-form-115c4-default-rtdb.firebaseio.com/react-formData.json",
      {
        method: "post",
        header: "Content-Type : Application/json",
        body: JSON.stringify({
          name: user.username
        }),
      }
    );
    if (up) {
      setUser({
        email: "",
      });
      alert("your form is succesfully submit");
    }
  };
  return (
    <div>
      <div className="wrapper next-row">
        <div className="stay-updated">
          <h1>Stay Updated</h1>
          <p className="update-text">
            Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam
            labore at justo ipsum eirmod duo labore labore.
          </p>
          <div className="updated-inputs">
            <input
              type="email"
              name="username"
              value={user.email}
              className="email-input"
              placeholder="Enter Email Here"
              onChange={updateGetData}
            />
            <button
              type="submit"
              className="email-btn"
              onClick={updateSubmitData}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="vender-list">
        <img src="../../image/vendor-1.jpg" alt="" />
        <img src="../../image/vendor-2.jpg" alt="" />
        <img src="../../image/vendor-3.jpg" alt="" />
        <img src="../../image/vendor-4.jpg" alt="" />
        <img src="../../image/vendor-5.jpg" alt="" />
      </div>
    </div>
  );
}
