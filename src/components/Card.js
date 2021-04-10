import React from "react";

import Logo from "./Logo";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

const Card = ({ link, name, title }) => {
  return (
    <div className="card">
      <Logo />
      <CardBody link={link} name={name} title={title} />
      <CardFooter />
    </div>
  );
};

export default Card;
