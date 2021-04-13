import React from "react";
import { useSelector } from "react-redux";
import { Nav, Heading } from "../components";
import styled from "styled-components";

const UserProfile = () => {
  const user = useSelector(({ userData }) => userData);

  const logout = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.href = "/login";
  };

  return (
    <Main>
      <Nav />
      <Heading
        title="Pesonal info"
        subTitle="Basic info, like your name and photo"
      />
      <img src={user.avatar}></img>
      <div>{user.email}</div>
      <button onClick={logout} type="button">
        logout
      </button>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  min-height: 100vh;
`;

export default UserProfile;
