import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import "./styles.css";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import About from "./components/About";

function App() {
  return (
    <Fragment>
      <Route exact path="/">
        <Header />
        <Projects />
        <Footer />
      </Route>
      <Route path="/about" exact component={About}></Route>
    </Fragment>
  );
}

export default App;
