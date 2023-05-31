import React, { useContext, useState } from "react";
import "./login.scss";

import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/data/text/Header";
import Facebook from "./svg/facebook.svg";
import Google from "./svg/google.svg";
import Build from "./svg/build.svg";
import Parabol from "./svg/parabol.svg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert } from "@mui/material";
import { AuthenticationContext } from "../../context/authentication";

function Login() {
  const [loginMail, setLoginMail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [showPass, setShowPass] = useState("password");
  const { loginEmail, googlelogin, facebooklogin, alertMessage } = useContext(
    AuthenticationContext
  );

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    loginEmail(e, loginMail, logPassword, navigate("/"));
  };

  return (
    <div className="login">
      <div className="form">
        <div className="form-container">
          <div className="left">
            <div className="header">
              <Header>HOŞ GELDİNİZ</Header>
              <div className="underline"></div>
            </div>
            <p>
              Size özel teklif ve hizmetlerimize ulaşabilmeniz için giriş
              yapabilir , üyeliğiniz yok ise hesap oluşturabilirsiniz.
            </p>
            <form className="form-inputs" onSubmit={handleSubmit}>
              <input
                required
                className="input"
                onChange={(e) => setLoginMail(e.target.value)}
                placeholder="e-posta"
                value={loginMail}
              />
              <div className="input eye">
                <span className="light"></span>
                <input
                  className="eye"
                  required
                  placeholder="şifre"
                  value={logPassword}
                  type={showPass}
                  onChange={(e) => setLogPassword(e.target.value)}
                />
                <div
                  onClick={() =>
                    setShowPass((pre) =>
                      pre === "password" ? "text" : "password"
                    )
                  }
                  className="eye-icon"
                >
                  {showPass === "password" ? (
                    <RemoveRedEyeIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </div>
              </div>

              <NavLink to="/sifremi-unuttum" className="forgot-password">
                Şifremi Unuttum
              </NavLink>
              <button type="submit" className="login-button">
                Giriş Yap
              </button>
              <div className="or">
                <div className="line"></div>
                <span>veya</span>
                <div className="line"></div>
              </div>
            </form>
            <div className="social">
              <button onClick={facebooklogin} className="facebook">
                <img src={Facebook} alt="facebook-ile-giriş-yap" />
              </button>

              <button onClick={googlelogin} className="google">
                <img src={Google} alt="google-ile-giriş-yap" />
              </button>
            </div>
            {alertMessage && (
              <div className="alertdiv">
                <Alert className="alert" severity="error">
                  {alertMessage}
                </Alert>

                {/* <Alert className='alert' severity="warning">This is a warning alert — check it out!</Alert>
          <Alert className='alert' severity="info">This is an info alert — check it out!</Alert>
          <Alert className='alert' severity="success">This is a success alert — check it out!</Alert> */}
              </div>
            )}
            <NavLink className="link" to="/kayit-ol">
              Kayıt Ol
            </NavLink>
            <a
              href="https://firma.onlinekesif.com/"
              target="_blank"
              className="firm-register"
            >
              Firma için Hesap Oluştur
            </a>
          </div>
          <div className="right">
            <h1>Evinizde yapacağınız tadilatı önce bize anlatın.</h1>
            <div className="bottom">
              <img className="absolute" src={Parabol} alt="" />
              <img className="build" src={Build} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
