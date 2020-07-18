import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <Link to="/" className="nav-link">
        Chris Cosentino
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
    </header>
  );
};

export default Header;
