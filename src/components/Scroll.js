import React from "react";

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflow: "auto",
        border: "5px solid black",
        height: "500px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
