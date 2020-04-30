import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Header from "../components/Header/Header";
import Home from "../containers/Home";
import Login from "../containers/Login";
import About from "../containers/About";
import EmployeeList from "../containers/EmployeeList";
import EmployeeListCustomHook from "../containers/EmployeeListCustomHook";
import EmployeeDetail from "../containers/EmployeeDetail";

class Navigation extends React.PureComponent {
  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <PublicRoute path="/" exact component={Home} />
          <PublicRoute path="/login" restricted exact component={Login} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/employees" exact component={EmployeeList} />
          <PrivateRoute path="/employees/:id" component={EmployeeDetail} />
          <PrivateRoute
            path="/employees-hook"
            component={EmployeeListCustomHook}
          />
          <PrivateRoute path="/employee-detail" component={EmployeeDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Navigation;
