import React from "react";
import ActiveLink from "../Components/ActiveLink";

function Browse() {
  return (
    <div style={{ background: "#f6f4f6", minHeight: "100vh" }}>
      <div style={{ background: "#fff", borderBottom: "1px solid #c7c7c7" }}>
        <div className="container mt-4">
          <h2 className="text-center rubik">Discover petitions</h2>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <ActiveLink href="#">Featured</ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink href="#">Popular</ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink href="#">Recent</ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink href="#">Victorys</ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Browse;
