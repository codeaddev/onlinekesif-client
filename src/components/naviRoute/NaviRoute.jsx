import React, { useState } from "react";
import "../Navbar/navbar.scss";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavLink } from "react-router-dom";

function NaviRoute() {
  const pages = [
    { id: "01", label: "Profil", route: "/profil", link: true, after: true },
    { id: "02", label: "Keşiflerim", route: "/profil/kesiflerim", link: true },
  ];

  const location = window.location.pathname.split("/");

  return (
    <div className="news-line">
      {location[1] === "" ? (
        <div>
          Online keşif sizlere evinizin konforundan ayrılmak zorunda kalmadan
          yaptırmak istediğiniz tadilat için en uygun teklifleri almanızı
          sağlıyor .
        </div>
      ) : (
        <>
          <Typography className="breadcrumb">
            <Link href={"/"}>Anasayfa</Link>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {location.map((item, index) => (
                <Typography underline="hover" key={index} color="inherit">
                  {item}
                </Typography>
              ))}
            </Breadcrumbs>
          </Typography>
        </>
      )}
    </div>
  );
}

export default NaviRoute;
