import React from "react";
import Down from "../../components/sidelinks/svg/bigChevron.svg";
import { useState } from "react";
import SideLinks from "../../components/sidelinks/SideLinks";

function Hidden() {
  const [className, setClassName] = useState("closed");

  return (
    <div className="hidden-menu">
      <div
        onClick={() =>
          setClassName((pre) => (pre === "closed" ? "opened" : "closed"))
        }
        className="drop"
      >
        <img className="icon" src={Down} alt="" />
      </div>

      <div className={`submenu ${className}`}>
        <SideLinks />
      </div>
    </div>
  );
}

export default Hidden;
