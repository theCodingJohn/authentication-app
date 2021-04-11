import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import signup from "../services/register.service";
import { login } from "../reducers/authReducer";
import { getUser } from "../reducers/userReducer";
import FormError from "./FormError";
import schema from "../utils/yupSchema";

import {
  InputWrapper,
  Input,
  EmailSvg,
  PasswordSvg,
  Button,
} from "./LoginForm";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const registerUser = async (data) => {
    const credentials = data;
    const user = await signup(credentials);

    if (user.error) {
      window.localStorage.setItem("formError", JSON.stringify(user));
    }

    if (!user.error) {
      await dispatch(login(credentials));
    }

    const formError = window.localStorage.getItem("formError");
    if (formError) {
      const error = JSON.parse(formError);
      setError(error);
    }

    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(getUser(user.id));
      window.location.href = `/user/${user.id}`;
    }
  };

  return (
    <form onSubmit={handleSubmit(registerUser)} noValidate>
      {error && <FormError message={error.error} />}
      <InputWrapper>
        <Input
          color={errors.password ? "#d44950" : "#bdbdbd"}
          type="email"
          ref={register}
          placeholder="email"
          name="email"
        />
        <EmailSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="18px"
          height="18px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </EmailSvg>
      </InputWrapper>
      {errors.email?.message && <FormError message={errors.email.message} />}
      <InputWrapper>
        <Input
          color={errors.password ? "#d44950" : "#bdbdbd"}
          type="password"
          ref={register}
          placeholder="password"
          name="password"
        />
        <PasswordSvg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </PasswordSvg>
      </InputWrapper>
      {errors.password?.message && (
        <FormError message={errors.password.message} />
      )}
      <Button type="submit">Start coding now</Button>
    </form>
  );
};

export default RegisterForm;
