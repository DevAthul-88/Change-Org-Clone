import React from "react";
import data from "../data/category";

function Category({ id }) {
  const name = data.filter((e) => e.key == id);

  return (
    <div className="container mt-5">
      <h1 className="rubik fw-bold">{name[0].name}</h1>
    </div>
  );
}

export default Category;
