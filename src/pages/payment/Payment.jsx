import React, { useEffect } from "react";
import { useState } from "react";

import "./payment.scss";

import "react-credit-cards-2/dist/es/styles-compiled.css";
import "../detail.scss";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import CreditCardForm from "./CreditCardForm";
import Topbar from "./Topbar";
import IbanEft from "./IbanEft";
import { useLocation } from "react-router-dom";
import Pay3D from "./Pay3D";
import { Button } from "@mui/material";

const Payment = () => {
  const { state } = useLocation();
  console.log(state.id);
  console.log(state.rfn);

  const [installments, setInstallments] = useState([]);

  console.log(installments);

  var data = JSON.stringify({
    MERCHANT: "onlinekesif.com",
    MERCHANT_KEY: "S7i1ax6Rg2GPZTpcR6Nv2XXQJIHoQYyXNGnpXWH7n013xo2VM2LDYg==",
  });

  var config = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  // useEffect(() => {
  //   axios("/GetInstallments", config)
  //     .then(function (response) {
  //       setInstallments(response.data.INSTALLMENTS);
  //       console.log("direk request cevabı", response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  const [selected, setSelected] = useState("credit");

  const [user, setUser] = useState({
    FIRST_NAME: "Faruk",
    LAST_NAME: "Keskinsoy",
    MAIL: "f.keskinsoy@codead.com.tr",
    PHONE: "05308652184",
    CITY: "Bursa",
    STATE: "Nilüfer",
    ADDRESS: "Üçevler Mah",
    CLIENT_IP: "191.101.231.155",
  });
  const [card, setCard] = useState({
    CC_NUMBER: "5440789937131022",
    EXP_MONTH: "12",
    EXP_YEAR: "2024",
    CC_CVV: "179",
    CC_OWNER: "ÖMER FARUK YAMAN",
    INSTALLMENT_NUMBER: "3",
  });
  const [product, setProduct] = useState({
    PRODUCT_ID: "1",
    PRODUCT_NAME: "Hizmet",
    PRODUCT_CATEGORY: "Hizmet",
    PRODUCT_DESCRIPTION: "Hizmet",
    PRODUCT_AMOUNT: "1",
  });
  // const Pay = async () => {
  //   var data = JSON.stringify({
  //     Config: {
  //       MERCHANT: "onlinekesif.com",
  //       MERCHANT_KEY:
  //         "xmRzaOKj6+rf6Fn/cxXgVUwiRO4pkKDVfaHaPE7bGfNICVHPS9YlNg==",
  //       BACK_URL: "https://onlinekesif.com/tesekkurler",
  //       PRICES_CURRENCY: "TRY",
  //       ORDER_REF_NUMBER: "RFN0004",
  //       ORDER_AMOUNT: "3",
  //     },
  //     CreditCard: {
  //       ...card,
  //     },
  //     Customer: {
  //       ...user,
  //     },
  //     Product: [
  //       {
  //         ...product,
  //       },
  //     ],
  //   });

  //   var config = {
  //     method: "post",
  //     url: "https://posservice.esnekpos.com/api/pay/EYV3DPay",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="page-container">
      <div className="page-wrapper">
        <div className="payment">
          <Button onClick={Pay3D}>Git</Button>
        </div>
        <div className="payment-page">
          <Topbar selected={selected} setSelected={setSelected} />
          {selected === "credit" ? (
            <div className="payment-wrapper">
              <CreditCardForm state={state} user={user} setUser={setUser} />
              {/* {installments.length>0&&<Taksit installments={installments}/>} */}
            </div>
          ) : (
            <IbanEft />
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
