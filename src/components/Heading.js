import React from "react";
import styled from "styled-components";

const Heading = ({ title, subTitle }) => {
  return (
    <Container>
      <H2>{title}</H2>
      <P>{subTitle}</P>
    </Container>
  );
};

const Container = styled.div`
  margin: 4.95rem auto 2.502rem;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.063rem;
`;

const P = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.192rem;
  margin-top: 0.482rem;
`;

export default Heading;
