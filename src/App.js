import React, { useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import userService from "./services/user.service";

import { setUser } from "./reducers/userReducer";

import { Login } from "./pages";

import { PublicRoute } from "./routes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(setUser(user));

      userService.setToken(user.token);
    }
  }, []);
  return (
    <>
      <Switch>
        <PublicRoute path="/login" component={Login}></PublicRoute>
      </Switch>
    </>
  );
};

export default App;
