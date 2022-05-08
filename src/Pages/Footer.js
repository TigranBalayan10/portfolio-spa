import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../index.css";

function Footer() {
  return (
    <footer>
      <div class="flex items-center justify-center gap-6 m-5">
        <a href="https://github.com/TigranBalayan10" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            size="4x"
            className="text-gray-600 hover:text-zinc-900"
          ></FontAwesomeIcon>
        </a>
        <a href="https://twitter.com/Tiko_102" target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            size="4x"
            className="text-gray-600 hover:text-blue-700"
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.facebook.com/tigran.balayan.1" target="_blank">
          <FontAwesomeIcon
            icon={faFacebook}
            size="4x"
            className="text-gray-600 hover:text-blue-600"
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/tigran-balayan-33768a132/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="4x"
            className="text-gray-600 hover:text-blue-400"
          ></FontAwesomeIcon>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
