import React, { useState } from "react";
import { useSelector } from "react-redux";

import logo from "../assets/images/devchallenges.svg";
import dropDown from "../assets/images/arrow-drop-down-black.svg";
import { AccountIcon, GroupIcon, LogoutIcon } from "../svg";

const Nav = () => {
  const [display, setDisplay] = useState("none");
  const user = useSelector(({ userData }) => userData);

  const toggle = () => {
    display === "none" ? setDisplay("block") : setDisplay("none");
  };

  const logout = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.href = "/login";
  };

  return (
    <nav className="nav">
      <div className="row">
        <div className="col col1">
          <img className="logo" src={logo} alt="devchallenges logo" />
        </div>
        <div className="col col2" onClick={toggle}>
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
          <div className="nav-links-wrapper" style={{ display: `${display}` }}>
            <div className="row">
              <div className="col">
                <AccountIcon />

                <p>My Profile</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <GroupIcon />

                <p>Group Chat</p>
              </div>
            </div>
            <div className="row row3">
              <div className="divider"></div>
            </div>
            <div onClick={logout} className="row row4">
              <div className="col">
                <LogoutIcon />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
