import React from "react";
import { NavLink } from "react-router-dom";

const BreadCrumb = ({ pages }) => {
  return (
    <div id="breadCrumb" className="breadcrumb dark">
      {pages.map((i) => {
        return (
          <>
            {i.link ? (
              <NavLink className="bread-crumb" key={i.id} to={i.route}>
                {i.label}
              </NavLink>
            ) : (
              <span className="bread-crumb">{i.label}</span>
            )}
            {/* {i.after&&<span>{">"}</span>} */}
          </>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
