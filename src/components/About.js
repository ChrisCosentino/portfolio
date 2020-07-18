import React from "react";
import { Link } from "react-router-dom";

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
        Previously I've had the opportunity to work with award-winning studios
        including DesignStudio, Sennep, AnalogFolk, ustwo and Wolff Olins.
        <br />
        <br />
        I'm always looking to work on exciting projects that push the boundaries
        of interaction design and digital branding.
        <br />
        <br />
        I'm available for full-time, part-time, co-op, and internship positions.
        <br />
        <br />
        Get in touch –
      </div>
    </div>
  );
};

export default About;
