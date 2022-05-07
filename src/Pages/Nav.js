import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

function Nav() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-gray-600 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span class="font-semibold text-xl tracking-tight">Tigran Balayan</span>
      </div>
      <ul class="flex justify-evenly gap-20 mr-10">
        <li class="mr-8">
          <Link to="/about" class="flex text-white text-lg text-bold hover:bg-neutral-900 rounded p-2 focus:bg-neutral-900">
            About Me
          </Link>
        </li>
        <li class="mr-8">
          <Link to="/project" class="flex text-white text-lg text-bold hover:bg-neutral-900 rounded p-2 focus:bg-neutral-900">
            Project
          </Link>
        </li>
        <li class="mr-8">
          <Link to="/contact" class="flex text-white text-bold text-lg hover:bg-neutral-900 rounded p-2 focus:bg-neutral-900">
            Contact
          </Link>
        </li>
        <li class="mr-8">
          <Link to="/resume" class="flex text-white text-bold text-lg hover:bg-neutral-900 rounded p-2 focus:bg-neutral-900">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

{/* <nav className="navbar navbar-light bg-info">
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
</nav>; */}
