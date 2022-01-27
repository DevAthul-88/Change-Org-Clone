import React from 'react';
import  '../../Css/main.css';

function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand fs-3 rubik redColor" href="#">
      <strong>Change.Org</strong>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link"  href="#">Start a petitions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">My petitions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Browse</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Help</a>
        </li>
      </ul>

      <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
            </li>
        </ul>
        
    </div>
  </div>
</nav>;
}

export default Navbar;
