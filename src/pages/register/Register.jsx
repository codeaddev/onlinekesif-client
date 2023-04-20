import React from "react";
import { useState } from "react";
import "../login/login.scss";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  EmailAuthProvider,
  linkWithCredential,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase.config";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthenticationContext } from "../../context/authentication";
import Header from "../../components/data/text/Header";
import Build from "../login/svg/build.svg";
import Parabol from "../login/svg/parabol.svg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { doc, setDoc } from "firebase/firestore";
import { Alert } from "@mui/material";
import { isMobile } from "react-device-detect";
import "../login/login.scss";

function Register() {
  const [regData, setRegData] = useState({
    name: "",
    surName: "",
    phone: "",
    email: "",
    iGotit: false,
    letMeKnow: false,
  });
  const [regPassword, setRegPassword] = useState("");
  const [regPasswordCo, setRegPasswordCo] = useState("");
  const [showPass, setShowPass] = useState("password");
  const [alertMessage, setAlertMessage] = useState("");
  const { getUserData } = useContext(AuthenticationContext);

  const handleErrorMessage = (err) => {
    if (err === "Firebase: Error (auth/email-already-exists).") {
      setAlertMessage(
        "Sağlanan e-posta zaten mevcut bir kullanıcı tarafından kullanılıyor. Her kullanıcının benzersiz bir e-posta adresi olmalıdır"
      );
    } else if (err === "Firebase: Error (auth/id-token-expired).") {
      setAlertMessage("kullanıcı hatırlama süresi doldu.");
    } else if (err === "Firebase: Error (auth/internal-error).") {
      setAlertMessage(
        "Kimlik doğrulama sunucusu beklenmeyen bir hatayla karşılaştı. "
      );
    } else if (err === "Firebase: Error (auth/invalid-email).") {
      setAlertMessage(
        "email kullanıcı özelliği için sağlanan değer geçersiz. mail adresi, geçerli e-posta adresi olmalıdır."
      );
    } else if (err === "Firebase: Error (auth/wrong-password).") {
      setAlertMessage("şifreyi yanlış girdiniz");
    } else if (err === "Firebase: Error (auth/user-not-found).") {
      setAlertMessage("Kullanıcı bulunamadı, kaydolun veya tekrar deneyin");
    } else {
      setAlertMessage(
        "Bir hata meydana geldi, tekrar deneyin",
        err.message.replace("Firebase: Error ", "")
      );
    }
  };

  const credential = EmailAuthProvider.credential(regData.email, regPassword);

  const register = async (e, email, pass) => {
    e.preventDefault();
    if (auth.currentUser?.isAnonymous) {
      linkWithCredential(auth.currentUser, credential)
        .then((res) => {
          setDoc(doc(db, "Users", res.user.uid), {
            userid: res.user.uid,
            userName: regData.name,
            lastName: regData.surName,
            phone: regData.phone,
            email: email,
            provider: res.operationType,
            city: "",
            regDevice: isMobile ? "mobile" : "desktop",
            currentDevice: isMobile ? "mobile" : "desktop",
            adress: "",
            createdAt: new Date(),
            notification: regData.letMeKnow,
            virgin: true,
            isOnline: true,
            firm: false,
            client: true,
            logo: "",
            userUnique: new Date().valueOf().toString().substring(6),
            updatedAt: "",
            ZIP: "",
            //new
            orders: 0,
            viewedProduct: false,
            viewedBlog: false,
            point: [],
            readenBlogs: [],
            readenProducts: [],
            chatted: false,
            lastLogin: new Date(),
            //newest
            likes: [],
            comments: [],
          })
            .finally(() => navigate("/"))
            .catch((e) => {
              handleErrorMessage(e.message);
            });
        })
        .catch((er) => alert(er.message))
        .then(() => sendEmailVerification(auth.currentUser))

        .then(() => navigate("/"));
    } else {
      try {
        const createUser = await createUserWithEmailAndPassword(
          auth,
          email,
          pass
        );
        await updateProfile(createUser.user, { displayName: regData.name });
        await setDoc(doc(db, "Users", createUser.user.uid), {
          userid: createUser.user.uid,
          userName: regData.name,
          lastName: regData.surName,
          phone: regData.phone,
          email: email,
          provider: createUser.operationType,
          city: "",
          region: "",
          regDevice: isMobile ? "mobile" : "desktop",
          currentDevice: isMobile ? "mobile" : "desktop",
          adress: "",
          createdAt: new Date(),
          notification: regData.letMeKnow,
          virgin: true,
          isOnline: true,
          firm: false,
          client: true,
          logo: "",
          userUnique: new Date().valueOf().toString().substring(6),
          updatedAt: "",
          ZIP: "",
          //new
          orders: 0,
          viewedProduct: false,
          viewedBlog: false,
          point: [],
          readenBlogs: [],
          readenProducts: [],
          chatted: false,
          lastLogin: new Date(),
          likes: [],
          comments: [],
        }).catch((er) => {
          handleErrorMessage(er.message);
        });
        getUserData();
        navigate("/");
        await sendEmailVerification(auth.currentUser).catch((e) => {
          handleErrorMessage(e.message);
        });
      } catch (err) {
        var message = err.message.replace("Firebase: Error ", "");
        alert(message);
      }
    }
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (regData.iGotit) {
      if (regPassword === regPasswordCo) {
        if (CheckPassword(regPassword)) {
          setAlertMessage("");
          register(e, regData?.email, regPassword);
        } else {
          setAlertMessage("Şifre gerekliliklerine dikkat et");
        }
      } else {
        setAlertMessage("Şifreler eşleşmiyor");
      }
    } else {
      setAlertMessage("Aydınlatma Metnini okuyup, onaylayın!");
    }
  };

  function CheckPassword(text) {
    var passw = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);

    return passw.test(text);
  }

  return (
    <div className="login">
      <div className="form">
        <div className="form-container reg">
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
              <div className="input-row">
                <input
                  required
                  className="input"
                  onChange={(e) =>
                    setRegData({ ...regData, name: e.target.value })
                  }
                  placeholder="isim"
                  name="name"
                  value={regData.name}
                />
                <input
                  required
                  className="input"
                  onChange={(e) =>
                    setRegData({ ...regData, surName: e.target.value })
                  }
                  placeholder="soyisim"
                  value={regData.surName}
                />
              </div>
              <div className="input-row">
                <input
                  required
                  className="input"
                  onChange={(e) =>
                    setRegData({ ...regData, email: e.target.value })
                  }
                  placeholder="e-posta"
                  name="email"
                  value={regData.email}
                />
                <input
                  required
                  className="input"
                  onChange={(e) =>
                    setRegData({ ...regData, phone: e.target.value })
                  }
                  placeholder="telefon"
                  name="phone"
                  value={regData.phone}
                />
              </div>

              <div className="input eye">
                <input
                  className="eye"
                  required
                  placeholder="şifre"
                  value={regPassword}
                  type={showPass}
                  onChange={(e) => setRegPassword(e.target.value)}
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
              <ul className="regExp">
                <li>* Şifre en az 8, en fazla 15 karakterden oluşmalıdır</li>
                <li>* Şifre en az 1 rakam ve 1 büyük harf içermelidir.</li>
              </ul>
              <div className="input eye">
                <input
                  className="eye"
                  required
                  placeholder="şifre tekrar"
                  value={regPasswordCo}
                  type={showPass}
                  onChange={(e) => setRegPasswordCo(e.target.value)}
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
              <div className="radios">
                <div className="inputRow">
                  <input
                    type="radio"
                    id="huey"
                    name="drone"
                    value="Bana özel kampanya ve indirimlerden haberdar olmak için (Rıza Metni kapsamında) elektronik
                              İleti almak istiyorum."
                    checked={regData.letMeKnow}
                    onClick={() => {
                      setRegData({ ...regData, letMeKnow: !regData.letMeKnow });
                    }}
                  />
                  <label htmlFor="huey">
                    Bana özel kampanya ve indirimlerden haberdar olmak için{" "}
                    <b>(Rıza Metni kapsamında)</b> elektronik İleti almak
                    istiyorum.
                  </label>
                </div>
                <div className="inputRow">
                  <input
                    type="radio"
                    id="metin"
                    name="mrone"
                    value="Aydınlatma Metnini okudum onaylıyorum."
                    checked={regData.iGotit}
                    onClick={() => {
                      setRegData({ ...regData, iGotit: !regData.iGotit });
                    }}
                  />
                  <label htmlFor="metin">
                    <b>
                      <a
                        href="https://onlinekesif.com/uyelik-sozlesmesi"
                        target="_blank"
                      >
                        <u>Aydınlatma Metnini</u>
                      </a>
                    </b>{" "}
                    okudum onaylıyorum.
                  </label>
                </div>
              </div>
              <button type="submit" className="login-button">
                Kayıt Ol
              </button>
            </form>
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
            <NavLink className="link" to="/giris-yap">
              Zaten üye misiniz ? <strong>Giriş Yap</strong>
            </NavLink>
          </div>
          <div className="right">
            <h1>Evinizde yapacağınız tadilatı önce bize anlatın.</h1>
            <div className="bottom">
              <img className="absolute" src={Parabol} alt="" />
              <img src={Build} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
