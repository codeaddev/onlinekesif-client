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
import { Box, Button, Modal, Typography } from "@mui/material";
import useForm from "./useForm";




const Payment = () => {
  const { state } = useLocation();

  const [data, setData] = React.useState(null);

  const {modalinner,handleClose}=useForm()

  console.log(modalinner.open)

  // React.useEffect(() => {
  //   axios.get('http://localhost:3001/odeme')
  // .then(response => {
  //   // Handle the response data here
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   // Handle any errors here
  //   console.error(error);
  // });
  // }, []);
  
  // React.useEffect(() => {
  //   axios('https://hoork9crqb.execute-api.us-east-1.amazonaws.com/beta')
  // .then(response => {
  //   // Handle the response data here
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   // Handle any errors here
  //   console.error(error);
  // });
  // }, []);

  // React.useEffect(() => {
  //   axios.get('https://devop.onlinekesif.com/odeme')
  // .then(response => {
  //   //Handle the response data here
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   //Handle any errors here
  //   console.error(error);
  // });
  // }, []);
  
  // React.useEffect(() => {
  //   axios.get('https://devop.onlinekesif.com/odeme')
  // .then(response => {
  //   //Handle the response data here
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   //Handle any errors here
  //   console.error(error);
  // });
  // }, []);
  



  const [selected, setSelected] = useState("credit");
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

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


  return (
    <div className="page-container">
      <Modal
         open={modalinner.open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         
       >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
       </Modal>
      <div className="page-wrapper">
        
        <div className="payment-page">
        {/* <p>{!data ? "Loading..." : data}</p>
          <Button
          size="sm"
          color="warning"
          onClick={callTestPayment}
          >test Func çağır</Button>
          <Button
          onClick={call3DPayment}
          >Gerçek Func çağır</Button>
          <Button
          onClick={Pay3DTest}
          >Test Öde</Button>
          <Button
          onClick={Pay3D}
          >Gerçek Öde</Button> */}
          
         
          
          <Topbar selected={selected} state={state} setSelected={setSelected} />
          {selected === "credit" ? (
            <div className="payment-wrapper">
              <CreditCardForm  state={state} user={user} setUser={setUser} />
              {/* {installments.length>0&&<Taksit installments={installments}/>} */}
            </div>
          ) : (
            <IbanEft state={state} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
