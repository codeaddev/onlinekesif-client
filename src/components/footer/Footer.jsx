import React, { useContext, useState } from "react";
import "./footer.scss";
import Logo from "../Navbar/logo.svg";
import { CloudContext } from "../../context/cloudContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { PageModal } from "../Modal/PageModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import applesvg from "./apple.svg";
import googlesvg from "./google.svg";
import paymentsvg from "./payment.svg";
function Footer({ setMainList, setChanged }) {
  const { questionData } = useContext(CloudContext);
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
  let navigate = useNavigate();

  const policyList = [
    { id: "01", label: "KVKK", to: "/KVKK" },
    { id: "02", label: "Gizlilik Ayarları", to: "/KV-saklanmasi-ve-imha" },
    {
      id: "03",
      label: "Çerez Politikası",
      to: "/Web-Sitesi-Gizlilik-Ve-Cerz-Politikasi",
    },
    { id: "04", label: "Üyelik Sözleşmesi", to: "/uyelik-sozlesmesi" },
    { id: "05", label: "Site Haritası", to: "/Site-haritasi" },
    //{ id: "06", label: "Tedarikçi Sözleşmesi", to: "/Tagt" },
  ];
  const bottomlinks = [
    { id: "01", label: "Online Keşif", class: "white", to: "/" },
    { id: "02", label: "Hakkımızda", class: "yellow", to: "/hakkimizda" },
    {
      id: "03",
      label: "Blog",
      class: "yellow",
      to: "https://onlinekesif.com/blog/",
      a: true,
    },
    { id: "04", label: "İletişim", class: "yellow", to: "/iletisim" },
    {
      id: "05",
      label: "Yardım",
      class: "yellow",
      to: "/yardim-ve-islem-rehberi",
    },
  ];

  var route = useLocation().pathname;

  const handleSituation = (route) => {
    setAlertMessage({
      ...alertMessage,
      visible: true,
      title: "Uyarı",
      infoText: "Yaptığınız Değişikler Kaybolmak Üzere",
      isInfo: false,
      isError: false,
      route: "/hizmet-olustur",
      handleFunction: () => navigate(route),
    });
  };

  const handleRoute = (i) => {
    setMainList({ list: i.questions, mainWish: i.title });
    navigate("hizmet-olustur");
    setChanged((pre) => !pre);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <PageModal
        open={alertMessage.visible}
        state={alertMessage}
        setState={setAlertMessage}
      />
      <div className="footer-top">
        <div className="col one">
          <div className="centered">
            <p className="logo-title">ONLİNE KEŞİF</p>
            <p> Mühendislik ve Danışmanlık Hizmetleri Anonim Şirketi </p>
            <p>
              Online keşif sizlere evinizin konforundan ayrılmak zorunda
              kalmadan yaptırmak istediğiniz tadilat için en uygun teklifleri
              almanızı sağlıyor.
            </p>
            <div className="contact-area">
              <div className="link line">
                <EmailIcon />
                <a href="mailto: destek@onlinekesif.com">
                  destek@onlinekesif.com
                </a>
              </div>
              {/* <div className="link line">
 <WhatsAppIcon/>
 <a href="https://wa.me/905335908916" rel="nofollow" target="_blank">05335908916</a>
 </div> */}
              <div className="link line">
                <LocalPhoneIcon />
                <a href="tel:+908502420573">0850 242 05 73</a>
              </div>
            </div>

            <div className="svg">
              <img
                src={applesvg}
                alt="apple.store.svg"
                className="apple"
                height={50}
                align="left"
              />
              <img
                src={googlesvg}
                alt="google.play.svg"
                className="google"
                height={50}
              />
            </div>
            <img src={paymentsvg} className="bank" />
          </div>
        </div>

        <div className="col four">
          <div className="centered center">
            <h3 className="col-title">Hizmetler</h3>
            <div className="right">
              {questionData.map((i) => {
                return (
                  <>
                    {i.title !== "Doğalgaz Tesisatı" && (
                      <div
                        key={i.id}
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
                              handleFunction: () => handleRoute(i),
                            });
                          } else {
                            handleRoute(i);
                          }
                        }}
                        className="link"
                      >
                        {i.title}
                      </div>
                    )}
                  </>
                );
              })}
              <div onClick={() => navigate("/jet-servisler")} className="link">
                Jet Servisler
              </div>
            </div>
            {/* <div 
 onClick={()=>{
 if(route==="/hizmet-olustur"){
 handleSituation("/hizmetler")
 }else{
 navigate("/hizmetler")
 window.scrollTo(0,0)
 
 }
 }}
 className="button-red">Daha Fazlası</div> */}
          </div>
        </div>

        <div className="col four">
          <div className="centered">
            <h3 className="col-title">Online Keşif</h3>
            <div className="right">
              {bottomlinks.map((i) => {
                return (
                  <>
                    {i.a ? (
                      <a
                        className={`link ${i.class}`}
                        href={i.to}
                        target="_blank"
                      >
                        Blog
                      </a>
                    ) : (
                      <NavLink
                        key={i.id}
                        className={`link ${i.class}`}
                        to={i.to}
                      >
                        {i.label}
                      </NavLink>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="col four">
          <div className="centered">
            <h3 className="col-title">Bizi Takip Edin</h3>

            <div className="right">
              <a
                href="https://www.facebook.com/onlinekesifcom?mibextid=ZbWKwL"
                target="_blank"
                className="facebook social"
              >
                {" "}
                <span>Facebook</span>&nbsp;
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                href="https://www.instagram.com/onlinekesif/?igshid=MTg0ZDhmNDA%3D"
                target="_blank"
                className="instagram social"
              >
                <span>Instagram</span>&nbsp;
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://www.linkedin.com/company/onlineke%C5%9Fif/"
                target="_blank"
                className="linkedin social"
              >
                {" "}
                <span>Linkedin</span> &nbsp; &nbsp;
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://twitter.com/onlinekesif?t=cRP8o8VqWu0fEi51JQsP0w&s=08"
                target="_blank"
                className="twitter social"
              >
                {" "}
                <span>Twitter</span>&nbsp; &nbsp; &nbsp; &nbsp;
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a
                href="https://www.youtube.com/channel/UCaEkP0Kt6KOKDfS_IgBgFPQ"
                target="_blank"
                className="youtube social"
              >
                {" "}
                <span>Youtube</span> &nbsp; &nbsp;
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        {/* sağ footerdan buraya iletişim */}
        <div className="bottom-wrapper">
          <div className="left ">
            {policyList.map((i) => {
              return (
                <div
                  key={i.id}
                  onClick={() => {
                    if (route === "/hizmet-olustur") {
                      handleSituation(i.to);
                    } else {
                      navigate(i.to);
                      window.scrollTo(0, 0);
                    }
                  }}
                  className="link"
                >
                  {i.label}
                </div>
              );
            })}
          </div>

          <div className="right">
            Onlinekesif.com bir Online Keşif A.Ş. Kuruluşudur
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
