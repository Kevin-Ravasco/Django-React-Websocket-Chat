import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axios";

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    password2: "",
  });
  // validate and submit the form data to the server
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.email &&
      credentials.password &&
      credentials.password2 &&
      credentials.password === credentials.password2
    ) {
      axiosInstance
        .post("accounts/register/", credentials)
        .then(function (response) {
          window.location.href = "/login";
        })
        .catch(function (error) {
          console.log(
            "The signup error is >>>>",
            JSON.stringify(error.response)
          );
        });
    }
  };

  // to handle the change in the form input fields
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className=" auth-container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="card">
            <div className="card-body">
              <h5>Sign Up</h5>
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                  <label>Email:</label>
                  <input
                    className="form-control"
                    type={"email"}
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Enter email..."
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password:</label>
                  <input
                    className="form-control"
                    type={"password"}
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Enter password..."
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Confirm Password:</label>
                  <input
                    className="form-control"
                    type={"password"}
                    name="password2"
                    value={credentials.password2}
                    onChange={handleChange}
                    placeholder="Confirm password..."
                  />
                </div>
                <button className="btn btn-primary w-100">Login</button>
              </form>
              <p className="text-center">
                <Link to="/login">Already have an account? Login Here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
