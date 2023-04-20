import React from "react";
import { useNavigate } from "react-router-dom";
import "./serviceWidget.scss";

function ServiceWidget({ item }) {
  let navigate = useNavigate();

  return (
    <div onClick={() => navigate("kesiflerim")} className="item">
      <div className="left">
        <span className="label">{item.label}</span>
        <span className="data">{item.data}</span>
      </div>
      <div className="right">
        <img src={item.svg} alt="" className="icon" />
      </div>
    </div>
  );
}

export default ServiceWidget;
