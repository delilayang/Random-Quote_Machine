import React from "react";

// Stateless
const Button = ({ buttonDisplayName, clickHandler }) => {
  return <button onClick={clickHandler}>{buttonDisplayName}</button>;
};

export default Button;
