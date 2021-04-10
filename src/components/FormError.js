import React from "react";
import styled from "styled-components";

const FormError = ({ message }) => {
  return <Error>{message}</Error>;
};

const Error = styled.div`
  margin-top: -12px;
  margin-bottom: 10px;
  color: #d44950;
  font-size: 14px;
  margin-left: 3px;
`;

export default FormError;
