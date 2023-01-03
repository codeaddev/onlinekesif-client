import React, { useState } from "react";
import KPU from "./svg/KPU.svg"


export default function ServiceItemAlt ({ item,scrollPosition, ...props }) {
  let [state, setstate] = useState(0);

  return (
    <div className="slide-item">
        <div className="slide-item-inner">
    
            <img
            className="main-img"
            src={item.download_url}
            alt="ss"
            />
            <img src={KPU} alt=""
            className="KPU"
            />
            <h2>{item.mainWish}</h2>
            <p>{item.desc}</p>
            
            <img src={item.svg} alt=""
            className="siluette"
            />
        </div>
        
       
      
    </div>
  );
}