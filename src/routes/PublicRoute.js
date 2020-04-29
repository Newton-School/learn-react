import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../utils/login";

// <PublicRoute component={Login} exact restricted path="/login" />
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to="/about" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
