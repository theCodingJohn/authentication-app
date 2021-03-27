import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getUser } from "../reducers/userReducer";

import { login } from "../reducers/authReducer";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const loginUser = async (data) => {
    const credentials = data;
    await dispatch(login(credentials));

    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(getUser(user.id));
    }
  };

  return (
    <form onSubmit={handleSubmit(loginUser)}>
      <input ref={register} placeholder="email" name="email" />
      <input ref={register} placeholder="password" name="password" />
      <button type="submit">login</button>
    </form>
  );
};

export default Login;
