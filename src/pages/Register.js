import React from "react";

import { Card } from "../components";

import { Main } from "./Login";

const Register = () => {
  return (
    <Main className="user-entry">
      <Card link="/login" name="Login" title="Already a member? " />
    </Main>
  );
};

export default Register;
