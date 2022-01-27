import React from "react";
import categories from "../data/category";

function StartPetition() {
  return (
    <div className="container mt-5">
      <h1>What kind of issue are you petitioning on?</h1>
      <h5 className="mt-3">
        Selecting a topic allows Change.org to recommend your petition to
        interested supporters.
      </h5>

      <div className="card-sec mt-5 row">
        {categories.map((e, index) => {
          return (
            <div
              className="cards  col-4 mt-4"
              key={index}
              
              
            >
              <div className="card text-center" id="card" style={{ cursor: "pointer" }}>
                <div className="card-body">
                  <h1 className="redColor">
                    <i className={e.icon}></i>
                  </h1>
                  <h5 className="mt-3">{e.name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="btn btn-danger btn_red mt-4 ml-auto">
        <strong>Continue</strong>
      </button>
    </div>
  );
}

export default StartPetition;
