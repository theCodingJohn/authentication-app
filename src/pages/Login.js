import React from "react";
import styled from "styled-components";

import { Card } from "../components";

const Login = () => {
  return (
    <Main className="user-entry">
      <Card
        link="/register"
        name="Register"
        title="Don't have an account yet? "
      />
    </Main>
  );
};

export const Main = styled.main`
  padding: 0 1.157rem;
`;

export const Subtext = styled.span`
  font-size: 0.875rem;
  color: rgba(130, 130, 130, 1);
`;

export default Login;
