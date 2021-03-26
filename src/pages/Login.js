import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { login } from "../reducers/userReducer";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const loginUser = (data) => {
    const credentials = data;
    dispatch(login(credentials));
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
