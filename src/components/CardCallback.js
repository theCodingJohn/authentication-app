import React from "react";

import { Link } from "react-router-dom";

import { Subtext } from "../pages/Login";

const CardCallback = ({ link, name, title }) => {
  return (
    <Subtext>
      {title}
      <Link to={link} className="callback">
        {name}
      </Link>
    </Subtext>
  );
};

export default CardCallback;
