import React from "react";

export default function SignUp() {
  return (
    <div className=" auth-container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="card">
            <div className="card-body">
              <h5>Sign Up</h5>
              <form className="auth-form">
                <div className="form-group mt-3">
                  <label>Email:</label>
                  <input
                    className="form-control"
                    type={"email"}
                    placeholder="Enter email..."
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password:</label>
                  <input
                    className="form-control"
                    type={"password"}
                    placeholder="Enter password..."
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Confirm Password:</label>
                  <input
                    className="form-control"
                    type={"password"}
                    placeholder="Confirm password..."
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
