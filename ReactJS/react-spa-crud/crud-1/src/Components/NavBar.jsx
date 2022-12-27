import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          NavBar
        </a> */}
        <Link className="navbar-brand" to={'/'}>NavBar</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to={"create"} className="nav-link">CreateUser</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;