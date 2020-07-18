import React from "react";
import { GitHub, Linkedin, Instagram } from "react-feather";

const Footer = () => {
  return (
    <footer>
      <span>Get in touch.</span>
      <a href="mailto: chriscosentino@hotmail.com" className="email">
        chriscosentino@hotmail.com
      </a>
      <div className="icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ChrisCosentino"
        >
          <GitHub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/chriscosentino98/"
        >
          <Linkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/chriscosentino_/?hl=en"
        >
          <Instagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
