import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  let [user, setUser] = useState({
    name: "",
    pass: "",
  });

  const logGetData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const LogSubmitData = async (e) => {
    e.preventDefault();
    const log = await fetch(
      "https://react-form-115c4-default-rtdb.firebaseio.com/react-formData.json",
      {
        method: "post",
        header: "Content-Type : Application/json",
        body: JSON.stringify({
          name: user.username,
          pass: user.pass,
        }),
      }
    );
    if (log) {
      setUser({
        username: "",
        pass: "",
      });
      alert("your form is succesfully submit");
    }
  };
  return (
    <div>
      <div className="login-form-m">
        <h2>Login Form</h2>
        <form className="login-f">
          <p>
            <input
              type="text"
              className="userin"
              name="username"
              value={user.username}
              placeholder="Username"
              required
              onChange={logGetData}
            />
            <i className="valid">
              <span></span>
              <span></span>
            </i>
          </p>
          <p>
            <input
              type="password"
              className="userin"
              name="pass"
              value={user.pass}
              placeholder="Password"
              onChange={logGetData}
              required
            />
            <i className="valid">
              <span></span>
              <span></span>
            </i>
          </p>
          <p>
            <input
              className="lbtn"
              type="submit"
              id="login"
              value="Login"
              onClick={LogSubmitData}
            />
          </p>
        </form>
        <div className="create-acc">
          <p>
            Not a member?{" "}
            <Link to="/register" className="lic">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
