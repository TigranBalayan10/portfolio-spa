import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./project.css";

function Project() {
  return (
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
          <a href="https://floating-dusk-25843.herokuapp.com/" target="_blank" className="position-absolute mt-2">
              <h3>Expense Tracker</h3>
          </a>
          <img
            src={require(`../assets/images/test.jpg`)}
            alt="test"
            className="img-fluid"
            id="img-project"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
