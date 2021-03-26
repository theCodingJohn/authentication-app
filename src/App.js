import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import userService from "./services/user.service";

import { setUser } from "./reducers/userReducer";

import { Login } from "./pages";

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
        <Route path="/login" component={Login}></Route>
      </Switch>
    </>
  );
};

export default App;
