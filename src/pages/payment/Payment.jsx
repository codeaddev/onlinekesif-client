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
import {Pay3DTest } from "./paramPosTest.api";
import { Pay3D } from "./paramPos.api";



const Payment = () => {
  const { state } = useLocation();

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get('/odeme')
  .then(response => {
    // Handle the response data here
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });
  }, []);
  
  const callBackendFunction = async () => {
    const objectParam = { name: 'John', age: 25 }; // Replace with the actual object parameter
    try {
      const response = await axios.post('/odeme/3D', objectParam);
      const result = response.data.result;
      // Handle the result here
      console.log(result);
    } catch (error) {
      // Handle any errors here
      console.error(error);
    }
  };


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
        <p>{!data ? "Loading..." : data}</p>
          <div
          onClick={callBackendFunction}
          >Func çağır</div>
          <div
          onClick={Pay3DTest}
          >Test Öde</div>
          <div
          onClick={Pay3D}
          >Gerçek Öde</div>
          <Topbar selected={selected} setSelected={setSelected} />
          {selected === "credit" ? (
            <div className="payment-wrapper">
              <CreditCardForm  state={state} user={user} setUser={setUser} />
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
