import React, { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    if (access_token) {
      window.location.href = "/";
    }
  }, [access_token]);

  // validate and submit the form data to the server
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email && credentials.password) {
      axiosInstance
        .post("accounts/token/", credentials)
        .then(function (response) {
          const data = response.data;
          console.log("successfull login >>>", data);
          localStorage.setItem("access_token", data.access);
          localStorage.setItem("refresh_token", data.refresh);
          localStorage.setItem("token_expiry", 18);
          window.location.href = "/";
        })
        .catch(function (error) {
          console.log(
            "The login error is >>>>",
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
              <h5>Login</h5>
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
                <button className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
