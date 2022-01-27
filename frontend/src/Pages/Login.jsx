import React from "react";
import { Link } from "wouter";

function Login() {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className=" col-md-6 offset-md-3">
          <h1 className="mb-4 rubik">Login</h1>

          <div className="form">
            <form>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <button className="btn btn-danger btn_red">
                <strong>Login</strong>
              </button>
            </form>

            <Link href="/signup">
              <a className="redColor mt-3 d-block">
                Don't have and account?, Create one now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
