import React from "react";
import { useSelector } from "react-redux";
import { Nav } from "../components";

const UserProfile = () => {
  const user = useSelector(({ userData }) => userData);

  const logout = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.href = "/login";
  };

  return (
    <>
      <Nav />
      <img src={user.avatar}></img>
      <div>{user.email}</div>
      <button onClick={logout} type="button">
        logout
      </button>
    </>
  );
};

export default UserProfile;
