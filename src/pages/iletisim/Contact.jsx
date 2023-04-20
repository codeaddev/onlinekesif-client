import React, { useEffect, useRef } from "react";
import "../detail.scss";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import emailjs from "@emailjs/browser";
import HomeIcon from "@mui/icons-material/Home";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "onlinekesif_support",
        "template_d0hbk7o",
        form.current,
        "az39-SQ3JNFE4N2sA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => alert("Form başarıyla gönderildi.."))
      .finally(() => navigate("/"))
      .catch((e) => console(e.messages));
    e.target.reset();
  };

  var list = [
    "İ",
    "L",
    "E",
    "T",
    "İ",
    "Ş",
    "İ",
    "M",
    " ",
    "B",
    "İ",
    "L",
    "G",
    "İ",
    "L",
    "E",
    "R",
    "İ",
  ];
  return (
    <div className="page-container">
      <div className="contact">
        <div className="center-box">
          <div className="left">
            <h2>FORMU DOLDURUNUZ</h2>
            <div className="underline"></div>
            <h6>
              Online Keşif hizmetleri hakkında her türlü soru ve talebiniz için
              aşağıdaki formu doldurabilirsiniz.
            </h6>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="İsim Soyisim"
                name="user_name"
                required
              />
              <input
                type="email"
                placeholder="E-Posta"
                name="user_email"
                required
              />
              <input
                type="tel"
                placeholder="Telefon Numarası"
                name="user_tel"
                required
              />
              <input
                type="message"
                placeholder="Konu"
                name="subject"
                required
              />
              <textarea
                type="message"
                placeholder="Mesajınız..."
                name="message"
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit">Mesaj Gönder</button>
            </form>
          </div>
          <div className="right">
            <div className="title">
              <div className="shadow-text">
                {list.map((i) => {
                  return <span>{i}</span>;
                })}
              </div>
              <h1>İletişim Bilgileri</h1>
            </div>
            <div className="content">
              <a href="tel:08502420573" className="link-row">
                <LocalPhoneIcon className="icon phone" />
                <label>
                  <span>Telefon Numarası</span>
                  <h3>0850 242 05 73</h3>
                </label>
              </a>
              <a
                href="https://wa.me/08502420573"
                className="link-row"
                rel="nofollow"
                target="_blank"
              >
                <WhatsAppIcon className="icon wp" />
                <label>
                  <span>Whatssap Numarası</span>
                  <h3>0850 242 05 73</h3>
                </label>
              </a>
              <a href="mailto: destek@onlinekesif.com" className="link-row">
                <EmailIcon className="icon mail" />
                <label>
                  <span>E-mail</span>
                  <h3>destek@onlinekesif.com</h3>
                </label>
              </a>
              <a className="link-row">
                <HomeIcon className="icon home" />
                <label>
                  <span>Adres</span>
                  <h3>
                    Üçeveler Mahallesi Tanay Caddesi No:19 Kat:2 D:4
                    Nilüfer-BURSA
                  </h3>
                </label>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
