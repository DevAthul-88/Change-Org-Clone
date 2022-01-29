import React from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import EditSchema from "../Schema/Edit";

function UpdateProfile({ id }) {
  const { userInfo } = useSelector((state) => state.login);
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className=" col-md-6 offset-md-3">
          <h1 className="mb-4 rubik">Edit Profile</h1>

          <div className="form">
            <Formik
              initialValues={{ email: userInfo.email , userName: userInfo.userName }}
              validationSchema={EditSchema}
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
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="userName"
                      defaultValue={userInfo.userName}
                      onChange={handleChange}
                      aria-describedby="emailHelp"
                    />
                     <div className="form-label text-danger">
                      {errors.userName && touched.userName && errors.userName}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      defaultValue={userInfo.email}
                      aria-describedby="emailHelp"
                    />
                     <div className="form-label text-danger">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>

                  <button className="btn btn-danger btn_red" type="submit">
                    <strong>Save Changes</strong>
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
