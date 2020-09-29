import React from "react";

export const Meter = (props) => {
  const style = {
    color: props.number > 5 ? "red" : "green"
  };

  return (
    <div>
      <h2 style={style}>{props.number}</h2>
    </div>
  );
};
