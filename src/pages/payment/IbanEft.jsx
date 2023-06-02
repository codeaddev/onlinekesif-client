import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button, CircularProgress, IconButton } from "@mui/material";
import "./CreditCardForm.scss";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const IbanEft = ({state}) => {
  const [loading,setLoading]=useState(false)
  
  const bankInfo = {
    account: "01010101",
    iban: "TR111122223333444455556666",
    sube: "111/NİLÜFER/BURSA",
    name: "Ömer Faruk YAMAN",
  };
  let navigate=useNavigate()
const onSubmit=async()=>{
  setLoading(true);
  const docRef=doc(db,"Jobs",state?.doc)
  let a
  try {
    a=await updateDoc(docRef,{
      eft:true,
    })
    setLoading(false)
    navigate(`/profil` );
    
  } catch (error) {
    setLoading(false)
    console.error(error.message)
    alert("Bir hata meydana geldi")
  }
  return a
}
  return (
    <div className="iban-havale">
      <div className="iban">
        <div className="row-info">
          <span className="title">IBAN</span>
          <span className="text">{bankInfo.iban}</span>
          <IconButton
            aria-label="kopyala"
            className="icon"
            onClick={() => {
              navigator.clipboard.writeText(bankInfo.iban);
            }}
            color="primary"
          >
            <ContentCopyIcon />
          </IconButton>
        </div>
      </div>
      <div className="havale">
        <div className="row-info">
          <span className="title">Hesap No:</span>
          <span className="text">{bankInfo.account}</span>
          <IconButton
            aria-label="kopyala"
            className="icon"
            onClick={() => {
              navigator.clipboard.writeText(bankInfo.account);
            }}
            color="primary"
          >
            <ContentCopyIcon />
          </IconButton>
        </div>
        <div className="row-info">
          <span className="title">Şube:</span>
          <span className="text">{bankInfo.sube}</span>
          <IconButton
            aria-label="kopyala"
            className="icon"
            onClick={() => {
              navigator.clipboard.writeText(bankInfo.sube);
            }}
            color="primary"
          >
            <ContentCopyIcon />
          </IconButton>
        </div>
        <div className="row-info">
          <span className="title">Ad Soyad/Unvan:</span>
          <span className="text">{bankInfo.name}</span>
          <IconButton
            aria-label="kopyala"
            className="icon"
            onClick={() => {
              navigator.clipboard.writeText(bankInfo.name);
            }}
            color="primary"
          >
            <ContentCopyIcon />
          </IconButton>
        </div>
        
      </div>
      <Button
        disabled={loading?true:false}
        onClick={onSubmit}
        className="payment-button" >
          {loading?<CircularProgress/>:"İşi Başlat"}
      </Button>
    </div>
  );
};

export default IbanEft;
