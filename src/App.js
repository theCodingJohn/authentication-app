import React, { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import userService from "./services/user.service";

import { setUser } from "./reducers/authReducer";
import { getUser } from "./reducers/userReducer";

import { Login, UserProfile } from "./pages";

import { PublicRoute, PrivateRoute } from "./routes";

const App = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(null);

  useEffect(() => {
    const getLocalStorageData = async () => {
      const loggedUserJSON = window.localStorage.getItem("loggedUser");
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON);
        await dispatch(setUser(user));
        userService.setToken(user.token);
        setId(user.id);

        dispatch(getUser(user.id));
      }
    };

    getLocalStorageData();
  }, []);

  return (
    <>
      <Switch>
        <PublicRoute exact path="/login" component={Login}></PublicRoute>
        <PrivateRoute
          path={`/user/${id}`}
          component={UserProfile}
        ></PrivateRoute>
      </Switch>
    </>
  );
};

export default App;
