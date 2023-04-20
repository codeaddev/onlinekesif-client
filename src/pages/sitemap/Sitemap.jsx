import React, { useContext, useState } from "react";
import { CloudContext } from "../../context/cloudContext";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./sitemap.scss";

function Sitemap({ setMainList, setChanged }) {
  const { questionData } = useContext(CloudContext);

  let navigate = useNavigate();

  const list = [
    { id: "01", to: "/", label: "Anasayfa" },
    { id: "02", to: "/hakkimizda", label: "Hakkımızda" },
    { id: "03", to: "/iletisim", label: "İletişim" },
    { id: "04", to: "/giris-yap", label: "Giriş Yap" },
  ];

  const handleRoute = (i) => {
    setMainList({ list: i.questions, mainWish: i.title });
    navigate("/hizmet-olustur");
    setChanged((pre) => !pre);
    window.scrollTo(0, 0);
  };

  return (
    <div className="sitemap">
      <h1 className="header">Site Haritası</h1>
      <br />
      <div className="sitemap-wrapper">
        <div className="col">
          Sayfalar
          <ul className="sitemap-list">
            {list.map((i) => {
              return (
                <li key={i.id}>
                  <NavLink className="link" to={i.to}>
                    {i.label}
                  </NavLink>
                </li>
              );
            })}
            <a href="https://firma.onlinekesif.com/giris-yap">Firma Giriş</a>
          </ul>
        </div>

        <div className="col">
          Hizmetler
          <div className="buttons">
            {questionData.map((i) => {
              return (
                <>
                  {i.title !== "Doğalgaz Tesisatı" && (
                    <div
                      key={i.id}
                      onClick={() => {
                        handleRoute(i);
                      }}
                      className="button"
                    >
                      {i.title}
                    </div>
                  )}
                </>
              );
            })}
            <div onClick={() => navigate("/jet-servisler")} className="button">
              Jet Servisler
            </div>
          </div>
        </div>

        <div className="col">
          Blog Yazıları <br /> <br />
          <a href="https://onlinekesif.com/blog/isitma/" target="_blank">
            ISITMA
          </a>
          <br />
          <br />
          <a href="https://onlinekesif.com/blog/iklimlendirme/" target="_blank">
            İKLİMLENDİRME
          </a>
          <br />
          <br />
          <a href="https://onlinekesif.com/blog/enerji/" target="_blank">
            ENERJİ
          </a>
          <br />
          <br />
          <a href="https://onlinekesif.com/blog/mimari/" target="_blank">
            MİMARİ
          </a>
          <br />
          <br />
          <a href="https://onlinekesif.com/blog/sanayi/" target="_blank">
            SANAYİ
          </a>
          <br />
          <br />
          <a href="https://onlinekesif.com/blog/teknoloji/" target="_blank">
            TEKNOLOJİ
          </a>
          <br />
          <br />
          <a href="https://onlinekesif.com/blog/trendler/" target="_blank">
            TRENDLER
          </a>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Sitemap;
