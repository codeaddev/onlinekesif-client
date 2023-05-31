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


  return (
    <div className="page-container">
      <div className="page-wrapper">
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
