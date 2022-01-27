import React, { useEffect, useState } from "react";
import categories from "../data/category";
import { useLocation } from "wouter";

function StartPetition() {
  const [location, setLocation] = useLocation();
  const [key, setKey] = useState("");

  function addKey(id) {
    setKey(id);
  }

  function nextFunc() {
    if (true) {
      setLocation(`/start-a-petition/${key}`);
    } else {
      setLocation("/login");
    }
  }

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
              onClick={() => addKey(e.key)}
            >
              <div
                className="card text-center"
                id="card"
                style={e.key == key ? { background: "#ecdbbd" } : null}
              >
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

      <button
        className="btn btn-danger btn_red mt-4 ml-auto"
        onClick={() => nextFunc()}
        disabled={key == "" ? "disabled" : null}
      >
        <strong>Continue</strong>
      </button>
    </div>
  );
}

export default StartPetition;
