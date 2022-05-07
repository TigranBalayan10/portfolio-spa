import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./nav.css";

function Nav() {
  return (
    <nav class="navbar navbar-light bg-info">
      <div class="container-fluid">
        <a class="navbar-brand">Tigran Balayan</a>
        <form class="d-flex gap-5 me-5">
          <Link to="/about" class="btn btn-outline-success border-0">
            About
          </Link>
          <Link
            to="/project"
            class="btn btn-outline-success border-0"
            id="header-link"
          >
            Project
          </Link>
          <Link to="/contact" class="btn btn-outline-success border-0">
            Contact
          </Link>
          <Link to="/resume" class="btn btn-outline-success border-0">
            Resume
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Nav;
