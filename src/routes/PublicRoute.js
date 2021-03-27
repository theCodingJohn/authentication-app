import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedUser = useSelector(({ loggedUser }) => loggedUser);

  return (
    <Route
      {...rest}
      component={(props) =>
        loggedUser ? (
          <Redirect to={`/user/${loggedUser.id}`} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
