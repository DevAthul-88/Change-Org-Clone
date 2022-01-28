import React from "react";
import { Link } from "wouter";
import { Formik } from "formik";
import LoginSchema from "../Schema/Login";

function Login() {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className=" col-md-6 offset-md-3">
          <h1 className="mb-4 rubik">Login</h1>

          <div className="form">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control ${
                        errors.email ? "border-danger" : null
                      }`}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div className="form-label text-danger">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control ${
                        errors.password && "border-danger"
                      }`}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div className="form-label text-danger">
                      {errors.password && touched.password && errors.password}
                    </div>
                  </div>

                  <button
                    className="btn btn-danger btn_red"
                    disabled={isSubmitting}
                  >
                    <strong>Login</strong>
                  </button>
                </form>
              )}
            </Formik>

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
