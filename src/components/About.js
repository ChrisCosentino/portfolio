import React from "react";
import { Link } from "react-router-dom";
import { GitHub, Linkedin, Instagram } from "react-feather";

const About = () => {
  return (
    <div className="about">
      <div className="container about-header">
        <span>Chris Cosentino</span>
        <Link to="/" className="about-nav-link">
          Close
        </Link>
      </div>
      <div className="hi">
        Hi.{" "}
        <span class="wave" role="img" aria-label="">
          👋
        </span>
      </div>
      <div className="container about-text">
        Hello I'm a full-stack software engineer based in Toronto with a{" "}
        <span className="underline">computer science degree</span>, passionate
        about building creative and fun web applications.
        <br />
        <br />
        Languages and tools I primarily use are{" "}
        <span className="underline"> Javascript</span>,{" "}
        <span className="underline"> React,</span>{" "}
        <span className="underline"> Node</span> and{" "}
        <span className="underline"> Java</span>.
        <br />
        <br />
        Currently, I have just finished my Computer Science degree from York
        University in Toronto, and I am looking for work.
        <br />
        <br />
        I'm always looking to work on exciting projects and challenging
        projects.
        <br />
        <br />
        I'm available for full-time, part-time, contract, freelance, co-op, and
        internship positions.
        <br />
        <br />
        Get in touch –
        <br />
        <a
          href="mailto: chriscosentino@hotmail.com"
          className="email"
          style={{ color: "white" }}
        >
          chriscosentino@hotmail.com
        </a>
        <div className="about-icons">
          <a
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ChrisCosentino"
          >
            <GitHub />
          </a>
          <a
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/chriscosentino98/"
          >
            <Linkedin />
          </a>
          <a
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/chriscosentino_/?hl=en"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
