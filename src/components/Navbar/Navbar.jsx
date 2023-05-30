import React, { useState } from "react";
import "./navbar.scss";
import Logo from "./logo.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthenticationContext } from "../../context/authentication";
import MenuIcon from "@mui/icons-material/Menu";
import { auth } from "../../firebase/firebase.config";
import { KombiData } from "../data/KombiDataBase";
import { KazanData } from "../data/KazanDataBase";
import { KlimaData } from "../data/KlimaDataBase";
import { PageModal } from "../Modal/PageModal";
import UserInfoCard from "../userInfoCard/UserInfoCard";
import { Button, Typography } from "@mui/material";
import NaviRoute from "../naviRoute/NaviRoute";

function Navbar({ setMainList, mainList, setChanged }) {
  const { user } = useContext(AuthenticationContext);
  const [className, setClassName] = useState("wide");
  const Links = [
    {
      id: "01",
      label: "Kombi",
      set: { list: KombiData.questions, mainWish: KombiData.title },
    },
    {
      id: "02",
      label: "Kazan",
      set: { list: KazanData.questions, mainWish: "Kazan" },
    },
    {
      id: "03",
      label: "Klima",
      set: { list: KlimaData.questions, mainWish: "Klima" },
    },
    { id: "04", label: "Jet Servisler", to: "jet-servisler", link: true },
  ];
  const [linkWidth, setLinkWidth] = useState();
  const [linkPosition, setLinkPosition] = useState();
  const [selectionItem, setSelectionItem] = useState([]);

  const route = useLocation().pathname;

  // useEffect(() => {
  //   setClassName("wide");
  // }, [paged]);

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

  const slideUnderline = (e) => {
    setLinkWidth(e.target.offsetWidth);
    setLinkPosition(e.target.offsetLeft - e.relatedTarget.offsetLeft);
  };

  const selectItem = () => {
    setSelectionItem({ width: linkWidth, position: linkPosition });
  };

  const selectedItem = () => {
    if (selectionItem.length !== 0) {
      setLinkPosition(selectionItem.position);
      setLinkWidth(selectionItem.width);
    } else {
      setLinkPosition(0);
      setLinkWidth(0);
    }
  };

  let navigate = useNavigate();

  return (
    <nav style={{ paddingBottom: 0 }} className={`navbar`}>
      <PageModal
        open={alertMessage.visible}
        state={alertMessage}
        setState={setAlertMessage}
      />
      <div className="navbarWrapper">
        <div className="navbarLeftArea">
          <div className="left">
            <div
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
                    handleFunction: () => navigate("/"),
                  });
                } else {
                  navigate("/");
                }
              }}
              className="link"
            >
              <img className="nav-logo" src={Logo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="navbarRightArea">
          <div className="menuArea">
            <div className="menuLinks">
              {Links.map((i) => {
                return (
                  <a
                    className="linkItem"
                    key={i.id}
                    onClick={(e) => {
                      selectItem();
                      if (route === "/hizmet-olustur") {
                        setAlertMessage({
                          ...alertMessage,
                          visible: true,
                          title: "Uyarı",
                          infoText: "Yaptığınız Değişikler Kaybolmak Üzere",
                          isInfo: false,
                          isError: false,
                          route: "/hizmet-olustur",
                          handleFunction: () => handleRoute(i),
                        });
                      } else {
                        handleRoute(i);
                      }
                    }}
                    onMouseEnter={(e) => slideUnderline(e)}
                    onMouseLeave={selectedItem}
                  >
                    {i.label}
                  </a>
                );
              })}
            </div>
            <div
              className="underline"
              style={{
                width: `${linkWidth}px`,
                marginLeft: `${linkPosition}px`,
              }}
            />
          </div>

          <div className="headerRight">
            <div
              onClick={() =>
                setClassName((pre) => (pre === "high" ? "wide" : "high"))
              }
              className="hidden-menu-bar"
            >
              <MenuIcon className="icon" />
            </div>
            <div className="right-wrapper">
              <NavLink onClick={() => setClassName("wide")} to="/destek">
                <Typography className="rightTextButton">DESTEK</Typography>
              </NavLink>

              {user && !user.isAnonymous ? (
                <UserInfoCard />
              ) : (
                <div className="loginArea">
                  <Button
                    variant="contained"
                    size="large"
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
                    className="button"
                  >
                    Giriş Yap
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`hidden-menu ${className}`}>
        <div className="links">
          {Links.map((i) => {
            return (
              <label
                key={i.id}
                className={`link ${
                  i.label === mainList.mainWish ? "active" : "link"
                }`}
                onClick={() => {
                  if (!i.link) {
                    setMainList(i.set);
                    setClassName("wide");
                    navigate("/hizmet-olustur");
                    setChanged((pre) => !pre);
                  } else {
                    navigate(i.to);
                    setClassName("wide");
                  }
                }}
              >
                {i.label}
              </label>
            );
          })}
          <div className="button-area">
            {user && !auth.currentUser.isAnonymous ? (
              <NavLink
                onClick={() => setClassName("wide")}
                to="/profil"
                className="button"
              >
                {user.displayName ? user.displayName : user.email}
              </NavLink>
            ) : (
              <NavLink
                onClick={() => setClassName("wide")}
                to="/giris-yap"
                className="button"
              >
                GİRİŞ YAP
              </NavLink>
            )}
            <a
              rel="noreferrer"
              className="button firm"
              href="http://firma.onlinekesif.com/"
              target="_blank"
            >
              Firma Girişi
            </a>
          </div>
        </div>
      </div>
      <NaviRoute />
    </nav>
  );
}

export default Navbar;
