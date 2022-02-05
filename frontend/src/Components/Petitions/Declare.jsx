import React from "react";
import { useSelector } from "react-redux";
function Declare() {
  const { loading, data, error } = useSelector((state) => state.details);
  const { userInfo } = useSelector((state) => state.login);
  return (
    <div>
      <h1 className="fw-bold rubik">Congratulations! Declare your victory</h1>
      <div className="alert alert-secondary mt-4" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>
        This petition made change with {data.supporters.length} supporters!
        </p>
        <hr />
        <p className="mb-0">
         You can now declare your victory
        </p>
      </div>
      <hr />
      <button className="btn btn-danger red-btn rubik">
        <strong>Declare Victory</strong>
      </button>
      <hr />
      <div className="alert alert-warning">
        <h6>Note after declaring your victory, You can't edit this petition</h6>
      </div>
    </div>
  );
}

export default Declare;
