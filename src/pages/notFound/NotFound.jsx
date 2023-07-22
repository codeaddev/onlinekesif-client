import React from "react";
import "./notfound.scss";
import { Link } from "react-router-dom";

import leftPlug from "./media/leftPlug.svg";
import rightPlug from "./media/rightPlug.svg";
import header404 from "./media/header404.svg";

function NotFound() {
  return (
    <div className="main">
      <img src={header404} alt="sayfa-bulunamadi" className="firstItem" />
      <div className="secondItem">
        <label>Sayfa bulunamadı</label>
      </div>
      <div className="plugins">
        <div className="leftSide">
          <div className="leftLine" />
          <img src={leftPlug} alt="left-plugin" className="leftPlugin" />
        </div>
        <div className="rightSide">
          <img src={rightPlug} alt="right-plugin" className="rightPlugin" />
          <div className="rightLine" />
        </div>
      </div>
      <div className="thirdItem">
        <label>Aradığınız sayfayı bulamadık...</label>
      </div>
      <div className="fourthItem">
        <Link to={"/"}>
          <button className="login-button">ANASAYFA</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
