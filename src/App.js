import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./styles.css";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import About from "./components/About";

function App({ location }) {
  return (
    <div>
      {/* <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={"fade"}
        > */}
      <div>Hi</div>
      {/* <Switch> */}
      <Route exact path="/">
        <Header />
        <Projects />
        <Footer />
      </Route>
      <Route path="/about" exact component={About}></Route>
      {/* </Switch> */}
      {/* </CSSTransition>
      </TransitionGroup> */}
    </div>
  );
}

export default App;
