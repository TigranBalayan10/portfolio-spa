import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFirefoxBrowser } from "@fortawesome/free-brands-svg-icons";
import "../index.css";
import Data from "../assets/data/project.json";

function Project() {
  return (
    <div className="flex justify-center grid-cols-4 gap-4 flex-wrap mt-8">
      {Data.map((projects) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-900">
          <img
            className="w-140 h-81"
            src={require(`../assets/images/${projects.image}.jpg`)}
            key={projects.image}
          ></img>
          <div className="px-6 py-4">
            <div
              className="font-bold text-xl mb-2 text-white"
              key={projects.name}
            >
              {projects.title}
            </div>
            <a href={projects.githubLink} key={projects.name} target="_blank">
              <FontAwesomeIcon
                className="text-gray-600 hover:text-zinc-900 mb-2"
                icon={faGithub}
                size="3x"
                id="icon-git"
              ></FontAwesomeIcon>
              <a href={projects.demoLink} key={projects.name} target="_blank">
                <FontAwesomeIcon
                  icon={faFirefoxBrowser}
                  size="3x"
                  className="text-gray-600 hover:text-red-700 mb-2 ml-2"
                ></FontAwesomeIcon>
              </a>
            </a>
            <p className="text-white text-base">{projects.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {projects.language.map((lang) => (
              <>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {lang}
                </span>
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
