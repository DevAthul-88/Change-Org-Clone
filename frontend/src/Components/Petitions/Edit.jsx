import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import EditSchema from "../../Schema/EditPetition";


function UpdatePetition() {
  const { data } = useSelector((state) => state.details);
  const { loading, status, error } = useSelector((state) => state.editProfile);

  const dispatch = useDispatch();
  return (
    <div className="container mt-5">
      {status ? (
        <div className="alert alert-success" role="alert">
          Profile updated successfully
        </div>
      ) : null}
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : null}
      <div className="row ">
        <div className=" col-md-6 offset-md-3">
          <h1 className="mb-4 rubik">Edit Petition</h1>

          <div className="form">
            <Formik
              initialValues={{
                title:data.title,
                description:data.description,
                goal: data.expectedVote,
              }}
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
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      name="title"
                      className={`form-control ${
                        errors.title ? "border-danger" : null
                      }`}
                      value={values.title}
                      defaultValue={data.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="form-label text-danger">
                      {errors.title && touched.title && errors.title}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Goal</label>
                    <input
                      type="number"
                      name="goal"
                      className={`form-control ${
                        errors.goal ? "border-danger" : null
                      }`}
                      value={values.goal}
                      defaultValue={data.expectedVote}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <div className="form-label text-danger">
                      {errors.goal && touched.goal && errors.goal}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea name="description" className="form-control" cols={30} rows={10}
                    defaultValue={data.description} 
                    value={values.description}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    ></textarea>
                    <div className="form-label text-danger">
                      {errors.description && touched.description && errors.description}
                    </div>
                  </div>

                  <button className="btn btn-danger btn_red" type="submit">
                    <strong>{loading ? "Loading...." : "Save changes"}</strong>
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

export default UpdatePetition;
