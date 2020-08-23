import React, { Component } from "react";
import "./links.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";

class Links extends Component {
  state = {};
  render() {
    return (
      <section className="links">
        <FontAwesomeIcon className="icon" icon={faFacebookSquare} size="lg" />
        <FontAwesomeIcon className="icon" icon={faGithubSquare} size="lg" />
        <FontAwesomeIcon className="icon" icon={faLinkedin} size="lg" />
        <FontAwesomeIcon className="icon" icon={faMedium} size="lg" />
        <FontAwesomeIcon className="icon" icon={faCodepen} size="lg" />
      </section>
    );
  }
}

export default Links;
