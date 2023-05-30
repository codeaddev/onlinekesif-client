import React, { useEffect, useState } from "react";
import "../Navbar/navbar.scss";
import { useLocation, useParams } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

function NaviRoute() {
  const [links, setLinks] = useState([]);

  const pages = [
    { id: "01", label: "Profil", route: "/profil", link: true, after: true },
    { id: "02", label: "Keşiflerim", route: "/profil/kesiflerim", link: true },
  ];

  const location = window.location.pathname.split("/");

  useEffect(() => {
    console.log(location);

    const getLastLink =
      location[1] !== "" ? location[location.length - 1] : "/";

    // setLinks([
    //   ...links,
    //   {
    //     id: "01",
    //     label: `${getLastLink}`,
    //     route: `/${getLastLink}`,
    //     link: true,
    //     after: true,
    //   },
    // ]);
    console.log(location);
  }, [location]);

  return location.pathname === "" ? (
    <div style={{ marginBottom: 0 }} className="news-line">
      Online keşif sizlere evinizin konforundan ayrılmak zorunda kalmadan
      yaptırmak istediğiniz tadilat için en uygun teklifleri almanızı sağlıyor .
    </div>
  ) : (
    <Breadcrumb pages={links} />
  );
}

export default NaviRoute;
