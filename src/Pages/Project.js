import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../index.css";

function Project() {

  return (
    <div class="flex justify-center grid-cols-4 gap-4 flex-wrap mt-8">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src={require(`../assets/images/expense-tracker.jpg`)}
          alt="Sunset in the mountains"
        ></img>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Expense Tracker App</div>
          <p class="text-gray-700 text-base">
            This is a web application that allows users to track their expenses
            and income. The user can create a new account, sign in, and sign
            out. The user can add an expense, edit an expense, delete an
            expense, and view a pie chart of their expenses. The user can add a
            tag, edit a tag, and delete a tag. The user can view their expenses
            and income in a pie chart. The user can view their expenses and
            income in a bar chart. After signing out, the user's data is saved.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Node
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Express
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            MySQL
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Handlebars
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;

<div className="container">
  <div className="row mt-4">
    <div className="col-4 position-relative">
      <a href="https://github.com/TigranBalayan10/expense-tracker">
        <FontAwesomeIcon
          className="position-absolute m-5"
          icon={faGithub}
          size="4x"
          id="icon-git"
        ></FontAwesomeIcon>
      </a>
      <a
        href="https://floating-dusk-25843.herokuapp.com/"
        target="_blank"
        className="position-absolute mt-2"
      ></a>
      <img
        src={require(`../assets/images/test.jpg`)}
        alt="test"
        className="img-fluid"
        id="img-project"
      />
    </div>
  </div>
</div>;
