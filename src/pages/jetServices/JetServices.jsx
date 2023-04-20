import React, { useEffect } from "react";
import { useState } from "react";
import "./jetServices.scss";
import Select from "react-select";
import {
  BursaDistricts,
  BursaNeighbourhoods,
  Bursa,
} from "../../components/data/bursa/ditricts";
import { useNavigate } from "react-router-dom";
import CreditCardForm from "../payment/CreditCardForm";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { CircularProgress } from "@mui/material";

import emailjs from "@emailjs/browser";
import IbanEFTJet from "./IbanEFTJet";

const JetServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var navigate = useNavigate();
  const [info, setInfo] = useState({
    show: false,
  });
  const [mahalles, setMahalles] = useState([]);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    let a, b, c;
    var id = new Date().valueOf().toString().substring(6);
    try {
      var ref = collection(db, "JetServices");
      a = await addDoc(ref, {
        ...info,
        id: id,
        createdAt: new Date(),
        mainWish: "Kombi Temizliği",
      });
    } catch (error) {
      setSending(false);
      alert("Bir hata meydana geldi");
      console.log(error);
    }
    try {
      var params = {
        subject: "Kombi Temizliği İsteğiniz Hk.",
        user_email: info?.email,
        user_name: "bilgi@onlinekesif.com",
        message: `Kombi Temizliği isteğiniz bize ulaştı. En kısa sürede ekip elemanlarımız sizinle irtibata geçecektir.`,
      };
      b = await emailjs.send(
        "onlinekesif_support",
        "template_fd5d0vb",
        params,
        "az39-SQ3JNFE4N2sA"
      );
    } catch (error) {
      setSending(false);
      alert("Bir hata meydana geldi");
      console.log(error);
    }
    try {
      var params = {
        subject: "Yeni Jet Servis İsteği",
        user_email: info?.email,
        user_name: info?.name,
        message: `${info?.ilce} ilçesi ${info?.mahalle} mahallesinden 1 adet Kombi Temizleme isteği var`,
      };
      c = await emailjs.send(
        "onlinekesif_support",
        "template_d0hbk7o",
        params,
        "az39-SQ3JNFE4N2sA"
      );
      setSending(false);
      navigate(`/tesekkurler`);
    } catch (error) {
      setSending(false);
      alert("Bir hata meydana geldi");
      console.log(error);
    }
    return a + b + c;
  };

  const handleOnChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  var BursaDistrictsList = [];
  BursaDistricts.forEach(function (element) {
    BursaDistrictsList.push({ label: element, value: element });
  });
  var MahalleList = [];
  mahalles.forEach(function (element) {
    MahalleList.push({ label: element, value: element });
  });
  const handleSelectPayment = (e, bool) => {
    setInfo({ ...info, paymentType: e, paid: bool, show: false });
  };

  const paymentTypes = [
    {
      id: "01",
      label: "EFT / HAVALE",
      onlinePos: false,
      paid: false,
      price: "600",
    },
    //{id:"02",label:"Kapıda Ödeme",onlinePos:false,paid:false},
    {
      id: "03",
      label: "Kapıda Kredi Kartı ile Ödeme",
      onlinePos: false,
      paid: false,
      price: "600",
    },
    {
      id: "04",
      label: "Hemen Öde",
      onlinePos: true,
      paid: false,
      price: "600",
    },
  ];
  return (
    <div className="jet-page-container">
      <div className="jet-services-page">
        <h2 className="section-header-text small middle">
          <u>Kombi Temizliği</u> Yaptırmak İstiyorum
        </h2>
        {!sending ? (
          <form onSubmit={handleSubmit} className="forms">
            <div className="left">
              <input
                placeholder="isim soyisim"
                id="name"
                name="name"
                type="text"
                required
                className="text-input"
                onChange={handleOnChange}
              />
              <input
                placeholder="telefon numaranız"
                id="phone"
                required
                name="phone"
                type="text"
                className="text-input"
                onChange={handleOnChange}
              />
              <input
                placeholder="e-posta adresiniz"
                id="email"
                required
                name="email"
                type="text"
                className="text-input"
                onChange={handleOnChange}
              />
              <Select
                className="select"
                placeholder="İl"
                options={Bursa}
                defaultInputValue="Bursa"
                defaultValue="Bursa"
              />
              <Select
                className="select"
                placeholder="İlçe"
                options={BursaDistrictsList}
                onChange={(e) => {
                  setMahalles(BursaNeighbourhoods[e.label]);
                  setInfo({ ...info, ilce: e.label || "" });
                }}
              />
              <Select
                className="select"
                placeholder="Mahalle"
                options={MahalleList}
                onChange={(e) => {
                  setInfo({ ...info, mahalle: e.label || "" });
                }}
              />
              <textarea
                placeholder="açık adresiniz"
                id="address"
                name="address"
                type="text"
                className="text-input area"
                onChange={handleOnChange}
              />
            </div>
            <div className="right">
              <h3>Ödeme Yöntemleri</h3>
              <div className="choices">
                {paymentTypes.map((i) => {
                  return (
                    <div
                      onClick={() => {
                        if (i.onlinePos) {
                          navigate("/odeme", {
                            state: {
                              id: new Date().valueOf().toString().substring(6),
                              createdAt: new Date(),
                              mainWish: "Kombi Temizliği",
                              totalPrice: i.price,
                            },
                          });
                          //setInfo({...info,show:true,paymentType:"3D"})
                        } else {
                          handleSelectPayment(i.label, i.paid);
                        }
                      }}
                      className={`choice ${
                        info?.paymentType === i.label
                          ? "selected"
                          : "non-selected"
                      }`}
                      key={i.id}
                    >
                      {i.label}
                    </div>
                  );
                })}
              </div>
              {info?.paymentType === "EFT / HAVALE" && <IbanEFTJet />}
              {!info.show && <input type="submit" />}
              {info.show && <CreditCardForm />}
            </div>
          </form>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default JetServices;
