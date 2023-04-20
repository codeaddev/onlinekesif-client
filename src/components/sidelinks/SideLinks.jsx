import React from "react";
import { NavLink } from "react-router-dom";
import "./sideLinks.scss";
import User from "./svg/user.svg";
import Circle from "./svg/circle.svg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Typography } from "@mui/material";
import {
  AddCircleOutline,
  ManageAccounts,
  ArrowForward,
} from "@mui/icons-material";

function SideLinks() {
  const Links = [
    { id: "01", label: "Panelim", to: "/profil", icon: Circle },
    { id: "02", label: "Hesabım", to: "/profil/hesabim", icon: User },
    { id: "03", label: "Tekliflerim", to: "/profil/kesiflerim", icon: Circle },
  ];

  return (
    <div className="links">
      <div className="nav-links">
        {Links.map((i) => {
          return (
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to={i.to}
              key={i.id}
            >
              <Typography className="linkText">
                {i.label === "Hesabım" ? (
                  <ManageAccounts />
                ) : i.label === "Tekliflerim" ? (
                  <AddCircleOutline />
                ) : i.label === "Panelim" ? (
                  <DashboardIcon />
                ) : (
                  <ArrowForward />
                )}
                {i.label}
              </Typography>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default SideLinks;
