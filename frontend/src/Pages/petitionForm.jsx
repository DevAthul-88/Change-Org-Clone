import React from "react";


function petitionForm({ id }) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className=" col-md-6 offset-md-3">
          <h1 className="mb-4 rubik">Create a new petition</h1>

          <div className="form">
            <form>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                 <textarea className="form-control" name="description" rows={10}></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Signature goal</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <h4>Your signature</h4>
                <label className="form-label mt-3">Your message</label>
                <textarea className="form-control" name="message"></textarea>
              </div>

              <button className="btn btn-danger btn_red">
                <strong>Create petition</strong>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default petitionForm;
