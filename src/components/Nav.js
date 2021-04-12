import React from "react";
import { useSelector } from "react-redux";

import logo from "../assets/images/devchallenges.svg";
import dropDown from "../assets/images/arrow-drop-down-black.svg";

const Nav = () => {
  const user = useSelector(({ userData }) => userData);

  return (
    <nav className="nav">
      <div className="row">
        <div className="col col1">
          <img className="logo" src={logo} alt="devchallenges logo" />
        </div>
        <div className="col col2">
          <img
            className="profile-pic"
            src={user.avatar}
            alt="profile picture"
          />
          <span className="name">{user.name || "John Doe"}</span>
          <img
            className="drop-down"
            src={dropDown}
            alt="black drop-down icon"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
