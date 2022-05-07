import React from "react";
import { Link } from "react-router-dom";
import "../index.css"


function Nav() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-gray-600 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-lg tracking-tight">Tigran Balayan</span>
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
