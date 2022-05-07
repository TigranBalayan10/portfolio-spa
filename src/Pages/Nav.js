import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-light bg-info">
      <div className="container-fluid">
        <a className="navbar-brand">Tigran Balayan</a>
        <form className="d-flex gap-5 me-5">
          <Link to="/about" className="btn btn-outline-success border-0">
            About
          </Link>
          <Link
            to="/project"
            className="btn btn-outline-success border-0"
            id="header-link"
          >
            Project
          </Link>
          <Link to="/contact" className="btn btn-outline-success border-0">
            Contact
          </Link>
          <Link to="/resume" className="btn btn-outline-success border-0">
            Resume
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Nav;
