import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import CardCallback from "./CardCallback";

import { Subtext } from "../pages/Login";

import { GoogleIcon, FacebookIcon, TwitterIcon, GithubIcon } from "../svg";

const CardBody = ({ link, name, title }) => {
  return (
    <div className="body-container">
      <div className="row">
        <div className="col">
          <h1>Join thousands of learners from around the world </h1>
          <p>
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {link === "/login" ? <RegisterForm /> : <LoginForm />}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="icons-container">
            <Subtext>or continue with these social profile</Subtext>
            <div className="icons-wrapper">
              <a href="/">
                <GoogleIcon />
              </a>
              <a href="/">
                <FacebookIcon />
              </a>
              <a href="/">
                <TwitterIcon />
              </a>
              <a href="/">
                <GithubIcon />
              </a>
            </div>
            <CardCallback link={link} name={name} title={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
