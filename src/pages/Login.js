import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { getUser } from "../reducers/userReducer";

import { login } from "../reducers/authReducer";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

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
    <form onSubmit={handleSubmit(loginUser)} noValidate>
      <p>{errors.email?.message}</p>
      <p>{errors.password?.message}</p>
      <input type="email" ref={register} placeholder="email" name="email" />
      <input
        type="password"
        ref={register}
        placeholder="password"
        name="password"
      />
      <button type="submit">login</button>
    </form>
  );
};

export default Login;
