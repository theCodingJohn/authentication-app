import React from "react";
import styled from "styled-components";

const FormError = ({ message }) => {
  return <Error>{message}</Error>;
};

const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d44950;
  color: white;
  height: 30px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 8px;
`;

export default FormError;
