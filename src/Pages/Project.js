import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFirefoxBrowser } from "@fortawesome/free-brands-svg-icons";
import "../index.css";
import Data from "../assets/data/project.json";

function Project() {
  const [numProjectsToShow, setNumProjectsToShow] = useState(3);
  const [isShowingAll, setIsShowingAll] = useState(false);

  return (
    <div className="container mx-auto px-4 place-items-center grid">
      <div className="flex justify-center gap-4 flex-wrap mt-8 mb-3">
        {Data.slice(0, numProjectsToShow).map((projects) => (
          <div className="max-w-sm rounded overflow-hidden border shadow-lg shadow-indigo-500/40 bg-blue-900">
            <img
              className="w-140 h-81"
              src={require(`../assets/images/${projects.image}.jpg`)}
              key={projects.image}
              alt={`${projects.image}`}
            ></img>
            <div className="px-6 py-4">
              <div
                className="font-bold text-xl mb-2 text-white"
                key={projects.name}
              >
                {projects.title}
              </div>
              <a
                href={projects.githubLink}
                key={projects.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-gray-200 hover:text-zinc-900 mb-2"
                  icon={faGithub}
                  size="3x"
                  id="icon-git"
                ></FontAwesomeIcon>
                <a
                  href={projects.demoLink}
                  key={projects.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFirefoxBrowser}
                    size="3x"
                    className="text-gray-200 hover:text-red-700 mb-2 ml-2"
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
      <div>
        {!isShowingAll ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer mb-4"
            onClick={() => {
              setNumProjectsToShow(Data.length);
              setIsShowingAll(true);
            }}
          >
            Show More
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer mb-4"
            onClick={() => {
              setNumProjectsToShow(3);
              setIsShowingAll(false);
            }}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

export default Project;
