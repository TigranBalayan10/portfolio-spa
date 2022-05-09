import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Nav() {
  return (
    <nav className="container flex justify-between flex-wrap p-6">
      <div className="flex items-center text-white mr-6">
        <img
          src={require("../assets/images/favicon.ico")}
          alt="logo"
          className="w-10 mr-3"
        />
        <Link to="/about" className="font-semibold text-2xl tracking-tight">
          Tigran's Portfolio
        </Link>
      </div>
      <ul className="flex shrink-0 justify-evenly gap-20 mr-10">
        <li>
          <Link
            to="/about"
            className="flex text-white text-lg text-bold hover:bg-blue-900 rounded p-2 focus:bg-blue-900"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/project"
            className="flex text-white text-lg text-bold hover:bg-blue-900 rounded p-2 focus:bg-blue-900"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="flex text-white text-bold text-lg hover:bg-blue-900 rounded p-2 focus:bg-blue-900"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className="flex text-white text-bold text-lg hover:bg-blue-900 rounded p-2 focus:bg-blue-900"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
