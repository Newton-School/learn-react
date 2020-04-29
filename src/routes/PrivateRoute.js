import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../utils/login";

// <PrivateRoute component={Home} exact path="/" />
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
