import React from "react";
import KPU from "./svg/KPU.svg";
import { useNavigate } from "react-router-dom";

export default function ServiceItem({ setMainList, item }) {
  let navigate = useNavigate();
  return (
    <div className="slide-item">
      <div
        onClick={() => {
          setMainList({ list: item.list, mainWish: item.mainWish });
          navigate("/hizmet-olustur");
        }}
        className="slide-item-inner"
      >
        <img className="main-img" src={item.download_url} alt="ss" />
        <img src={KPU} alt="" className="KPU" />
        <h2>{item.mainWish}</h2>
        <p>{item.desc}</p>

        <img src={item.svg} alt="" className="siluette" />
      </div>
    </div>
  );
}
