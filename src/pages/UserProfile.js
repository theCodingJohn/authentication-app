import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector(({ userData }) => userData);

  const logout = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.reload(false);
  };

  return (
    <div>
      <img src={user.avatar}></img>
      <div>{user.email}</div>
      <button onClick={logout} type="button">
        logout
      </button>
    </div>
  );
};

export default UserProfile;
