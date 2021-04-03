import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getUser } from "../reducers/userReducer";
import { login } from "../reducers/authReducer";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import FormError from "./FormError";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const loginUser = async (data) => {
    const credentials = data;
    await dispatch(login(credentials));

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
    <form onSubmit={handleSubmit(loginUser)} noValidate>
      {error && <FormError message={error.error} />}
      <InputWrapper>
        <Input type="email" ref={register} placeholder="email" name="email" />
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
      <Button type="submit">Login</Button>
    </form>
  );
};

const InputWrapper = styled.div`
  position: relative;
  height: 3rem;
  margin-bottom: 0.906rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 0.5rem;
  padding: 0 2rem 0 2.931rem;
  font-size: 1rem;
  &::placeholder {
    font-size: 1rem;
    color: rgba(130, 130, 130, 1);
    text-transform: capitalize;
  }
  &:focus {
    outline: none;
    box-shadow: 1px 1px 1px rgba(130, 130, 130, 1),
      -1px -1px 1px rgba(130, 130, 130, 1);
  }
`;

const EmailSvg = styled.svg`
  position: absolute;
  left: 14px;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 16px;
  width: 20xp;
  fill: rgba(130, 130, 130, 1);
`;

const PasswordSvg = styled(EmailSvg)`
  width: 16px;
  height: 21px;
`;

const Button = styled.button`
  background-color: rgba(47, 128, 237, 1);
  cursor: pointer;
  width: 100%;
  height: 2.375rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  margin-top: calc(1.407rem - 0.906rem);
`;

export default LoginForm;
