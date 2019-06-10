import React from "react";

const Button = props => {
  return (
    <button
      style={props.style}
      className="myButton"
      onClick={props.action}
      name={props.name}
    >
      {props.title}
    </button>
  );
};

export default Button;