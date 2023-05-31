import { Hidden } from "@mui/material";
import React from "react";
import BreadCrumb from "../BreadCrumb";
import EditForm from "./EditForm";
import "./myaccount.scss";
import SideLinks from "../../../components/sidelinks/SideLinks";

function MyAccount() {
  const pages = [
    { id: "01", label: "Profil", route: "/profil", link: true, after: true },
    { id: "02", label: "Hesabım", route: "/profil/hesabim", link: true },
  ];
  return (
    <div className="hesabim">
      <SideLinks />
      <div className="hesabim-container">
        <Hidden />
        <div className="hesabim-inner-container">
          <EditForm />
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
