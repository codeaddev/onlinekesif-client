import React, { useEffect } from 'react'
import { useState } from 'react'
import "./payment.scss"
import "../../detail.scss"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
import CreditCardForm from './CreditCardForm';
import Topbar from './Topbar';
import IbanEft from './IbanEft';

import { useLocation } from 'react-router-dom';


const EsnekPayment = () => {
  
const {state}=useLocation()

const [selected,setSelected]=useState("credit")

  //   React.useEffect(() => {
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
                                          
  return (
    <div className='page-container'>
      <div className="page-wrapper">
        <div className="payment-page">
            <Topbar selected={selected} setSelected={setSelected}/> 
            {selected==="credit"?
            
            <div className='payment-wrapper'>
              <CreditCardForm
              state={state}
              />
              {/* {installments.length>0&&<Taksit installments={installments}/>} */}
            </div>:<IbanEft/>
            }
                      
            
        </div>
      </div>
      
      
    </div>
  )
}

export default EsnekPayment