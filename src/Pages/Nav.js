import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  let links = [
    {
      name: "About Me",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/project",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Resume",
      path: "/resume",
    },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          {" "}
          <Link to="/about">
            <img
              src={require("../assets/images/favicon.ico")}
              alt="logo"
              className="w-10 mr-3"
            />
          </Link>
          <Link
            to="/about"
            className="font-semibold text-2xl tracking-tight text-white"
          >
            Tigran's Portfolio
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute gap-10 md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
            open ? "top-10" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.path}
                className="text-white hover:text-gray-700 focus:text-gray-700 duration-500"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
