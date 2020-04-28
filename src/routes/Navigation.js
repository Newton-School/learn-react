import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/About";
import Header from "../components/Header/Header";

class Navigation extends React.PureComponent {
  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default Navigation;
