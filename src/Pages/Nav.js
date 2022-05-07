import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      This is Navigation
      <ul>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
