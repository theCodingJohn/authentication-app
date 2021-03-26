import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedUser = useSelector(({ loggedUser }) => loggedUser);

  return (
    <Route
      {...rest}
      component={(props) =>
        loggedUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
