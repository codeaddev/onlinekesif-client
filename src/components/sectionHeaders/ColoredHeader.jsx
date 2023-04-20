import React from "react";

const ColoredHeader = ({ children }) => {
  return (
    <h3 className="colored" style={{ color: "#2cab67" }}>
      {children}
    </h3>
  );
};

export default ColoredHeader;
