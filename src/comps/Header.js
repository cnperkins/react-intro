import React from "react";

export const Header = (props) => {
  return (
    <h1>
      {props.city
        ? `Hello from ${props.city}, ${props.state}`
        : "No city given"}
    </h1>
  );
};
