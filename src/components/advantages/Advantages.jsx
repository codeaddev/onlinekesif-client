import React from "react";
import MiniExplain from "../sectionHeaders/MiniExplain";
import SectionHeader from "../sectionHeaders/SectionHeader";
import Tick from "./tick.svg";
import Trust from "./trust.svg";
import Happy from "./happy.svg";
import Time from "./timesave.svg";
import Quality from "./quality.svg";

const Advantages = () => {
  const list = [
    {
      id: "01",
      label: "Güvenilir Hizmet",
      li: "Zamandan tasarruf",
      svg: Trust,
    },
    {
      id: "02",
      label: "Kaliteli Ürüne Ulaşma",
      li: "Alanında uzman firmalar",
      svg: Quality,
    },
    {
      id: "03",
      label: "Zaman Tasarrufu",
      li: "Kaliteli ürün yelpazesi",
      svg: Time,
    },
    {
      id: "04",
      label: "Müşteri Memnuniyeti",
      li: "Deneyimli keşif ekibi",
      svg: Happy,
    },
  ];

  return (
    <div className="section advantages">
      <div className="header-bar">
        <SectionHeader>
          Online Keşif'in{" "}
          <strong>
            <u>Avantajları</u>
          </strong>
        </SectionHeader>
        <MiniExplain>Kaliteyi keşfetmenizi sağlıyoruz</MiniExplain>
      </div>
      <div className="body">
        <div className="right">
          {list.map((i) => {
            return (
              <div key={i.id} className="li-item">
                <div className="circle">
                  <img src={i.svg} />
                </div>
                <p>{i.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
