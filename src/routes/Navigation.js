import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../containers/Home";
import About from "../containers/About";
import EmployeeList from "../containers/EmployeeList";
import EmployeeDetail from "../containers/EmployeeDetail";

class Navigation extends React.PureComponent {
  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/employees" exact component={EmployeeList} />
          <Route path="/employees/:id" component={EmployeeDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Navigation;
