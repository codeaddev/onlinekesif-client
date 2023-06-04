import React, { useContext, useState } from "react";

import "./mobileMenu.scss";
import Kombi from "./svg/kombi.svg";
import Klima from "./svg/klima.svg";
import Kazan from "./svg/kazan.svg";
import JetServisler from "./svg/jetServisler.svg";
import CokYakinda from "./svg/cokYakinda.svg";
import Letter from "./svg/letter.svg";
import Headphones from "./svg/headphones.svg";
import StarWithBaloon from "./svg/starWithBaloon.svg";
import Arrow from "./svg/arrow.svg";
import Edit from "./svg/edit.svg";
import { AuthenticationContext } from "../../context/authentication";
import UserInfoCard from "../userInfoCard/UserInfoCard";
import { Logout } from "@mui/icons-material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { KombiData } from "../data/KombiDataBase";
import { KlimaData } from "../data/KlimaDataBase";
import { KazanData } from "../data/KazanDataBase";

function MobileMenu({ setMainList, setChanged }) {
  const { user, logout } = useContext(AuthenticationContext);

  const [alertMessage, setAlertMessage] = useState({
    infoText: "",
    visible: false,
    isInfo: true,
    isError: false,
    title: "",
    route: "",
    handleFunction: "",
    functionText: "Yine de Devam Et",
  });

  const handleRoute = (i) => {
    if (!i.link) {
      setMainList({ list: i.set.list, mainWish: i.set.mainWish });
      navigate("/hizmet-olustur");
      setChanged((pre) => !pre);
    } else {
      navigate(i.to);
    }
  };

  const navigate = useNavigate();

  const services = [
    {
      img: Kombi,
      label: "Kombi",
      set: { list: KombiData.questions, mainWish: KombiData.title },
      isActive: true,
    },
    {
      img: Klima,
      label: "Klima",
      set: { list: KlimaData.questions, mainWish: "Klima" },
      isActive: true,
    },
    {
      img: Kazan,
      label: "Kazan",
      set: { list: KazanData.questions, mainWish: "Kazan" },
      isActive: true,
    },
    {
      img: null,
      label: "Doğalgaz Tesisatı",
      isActive: false,
    },
    {
      img: null,
      label: "Fabrika Tesisatı",
      isActive: false,
    },
    {
      img: JetServisler,
      label: "JetServisler",
      to: "jet-servisler",
      link: true,
      isActive: true,
    },
    {
      img: null,
      label: "Proje Danışmanlığı",
      isActive: false,
    },
    {
      img: null,
      label: "Mimari Proje",
      isActive: false,
    },
    {
      img: null,
      label: "Mühendis",
      isActive: false,
    },
  ];

  const siteMap = [
    {
      icon: Letter,
      label: "Bizim İle İletişime Geçin",
    },
    {
      icon: Headphones,
      label: "Müşteri Hizmetleri",
    },
    {
      icon: StarWithBaloon,
      label: "Bizi Tanıyın",
    },
    {
      icon: Edit,
      label: "Gizlilik Politikası ve Sözleşmeler ",
    },
  ];

  const route = useLocation().pathname;

  return (
    <div className="mobileMenuMain">
      <div className="headerText">
        <p>
          İhtiyacınıza yönelik olan uygulama için keşif talep edebilirsiniz.
        </p>
      </div>
      <div className="mobileServiceArea">
        {services.map((item, index) => (
          <div className="mobileServiceItem" key={index}>
            {item.isActive ? (
              <div
                className="active"
                key={index}
                onClick={(e) => {
                  if (route === "/hizmet-olustur") {
                    setAlertMessage({
                      ...alertMessage,
                      visible: true,
                      title: "Uyarı",
                      infoText: "Yaptığınız Değişikler Kaybolmak Üzere",
                      isInfo: false,
                      isError: false,
                      route: "/hizmet-olustur",
                      handleFunction: () => handleRoute(item),
                    });
                  } else {
                    handleRoute(item);
                  }
                }}
              >
                <img src={item.img} alt={item.label} />
                <p>{item.label}</p>
              </div>
            ) : (
              <div className="passive" aria-disabled>
                <img src={CokYakinda} alt={item.label} />
                <p>{item.label}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mobileLoginArea">
        {user && !user.isAnonymous ? (
          <>
            <div className="userCardArea">
              <NavLink className="userCardLink" to="/profil">
                <UserInfoCard />
              </NavLink>
            </div>
            <div
              className="mobileLogoutArea"
              onClick={(e) => logout(e, navigate)}
            >
              <Logout />
              Çıkış Yap
            </div>
          </>
        ) : (
          <div className="mobileLogin">
            <NavLink
              to="/giris-yap"
              onClick={() => {
                if (route === "/hizmet-olustur") {
                  setAlertMessage({
                    ...alertMessage,
                    visible: true,
                    title: "Uyarı",
                    infoText: "Yaptığınız Değişikler Kaybolmak Üzere",
                    isInfo: false,
                    isError: false,
                    route: "/hizmet-olustur",
                    handleFunction: () => navigate("/giris-yap"),
                  });
                } else {
                  navigate("/giris-yap");
                }
              }}
            >
              Giriş Yap
            </NavLink>
            <p>Hesabınıza Erişmek İçin Giriş Yapın</p>
          </div>
        )}
      </div>
      <div className="siteMapLinks">
        {siteMap.map((item, index) => (
          <>
            <div className="siteMapItems" key={index}>
              <img src={item.icon} alt={item.label} />
              <p>{item.label}</p>
              <img className="sendArrow" src={Arrow} alt="git" />
            </div>
            <hr className="siteMapItemDivider" />
          </>
        ))}
      </div>
      <div className="mobileFooter">
        <div className="mobileFirmLogin">
          <NavLink
            to="https://firma.onlinekesif.com/"
            onClick={() => {
              if (route === "/hizmet-olustur") {
                setAlertMessage({
                  ...alertMessage,
                  visible: true,
                  title: "Uyarı",
                  infoText: "Yaptığınız Değişikler Kaybolmak Üzere",
                  isInfo: false,
                  isError: false,
                  route: "/hizmet-olustur",
                  handleFunction: () =>
                    navigate("https://firma.onlinekesif.com/"),
                });
              } else {
                navigate("https://firma.onlinekesif.com/");
              }
            }}
          >
            <p>Firma Girişi</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
