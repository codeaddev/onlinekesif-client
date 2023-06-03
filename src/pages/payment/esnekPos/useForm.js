
import { useContext, useState } from 'react'
import validateInfo from './validateInfo';
import axios from 'axios';
import { AuthenticationContext } from '../../../context/authentication';
import { auth, db } from '../../../firebase/firebase.config';
import { addDoc, collection, doc, setDoc, updateDoc } from 'firebase/firestore';

const useForm = () => {

  const {userData}=useContext(AuthenticationContext)
  const [errors, setErrors] = useState({})

    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardType: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardPostalCode: '',
        focus: ''
    })

    

  //new balance buradda esnek posun gerekli parametreleri oluşturulur.
  const merchant={
    MERCHANT:process.env.REACT_APP_MERCHANT,
    MERCHANT_KEY:process.env.REACT_APP_MERCHANT_KEY
  }
  //burada değiştirilebilir alanları oluşturuyoruz.
  const [apiParams,setApiParams]=useState({
      BACK_URL : "http://localhost:3000/odeme/",
      PRICES_CURRENCY : "TRY",
      ORDER_REF_NUMBER : "RFN0013",
      ORDER_AMOUNT : "1"
  })
  const [card,setCard]=useState({
    CC_NUMBER : "",
    EXP_MONTH : "",
    EXP_YEAR : "",
    CC_CVV : "",
    CC_OWNER : "",
    INSTALLMENT_NUMBER : "1"
    })
    const [customer,setCustomer]=useState({
      FIRST_NAME:auth?.currentUser?.displayName,
      LAST_NAME:userData?.lastName,
      MAIL:auth?.currentUser?.email,
      PHONE:userData?.phone,
      CITY:"Bursa",
      STATE:"",
      ADDRESS:userData?.address,
      CLIENT_IP:"191.101.231.155",
    })

  const [product,setProduct]=useState({
    PRODUCT_ID:"1",
    PRODUCT_NAME:"Hizmet",
    PRODUCT_CATEGORY:"Hizmet",
    PRODUCT_DESCRIPTION:"Hizmet",
    PRODUCT_AMOUNT:"1",
  })
  

  
    const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'CC_CVV') ? 'cvc' : e.target.name
        });
    }
    const handleFocusCard = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChangeEsnekCard = e => {
        const { name, value } = e.target
        setCard({
            ...card,
            [name]: value
        })
    }

    const handleChangeCustomer = e => {
        const { name, value } = e.target
        setCustomer({
            ...customer,
            [name]: value
        })
    }
    
    const handleChangeProduct = e => {
        const { name, value } = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }
   //bu bölümde kullanacağımız demo bilgiler bulunmaktadır.
    const handleLoadDemoCustomer=()=>{
        setCustomer({
        FIRST_NAME : "Firstname",
        LAST_NAME : "Lastname",
        MAIL : "destek@onlinekesif.com",
        PHONE : "05308652184",
        CITY : "Bursa",
        STATE : "Nilüfer",
        ADDRESS : "Merkez Mahallesi, Ayazma Cd. No:37/91 Papirus Plaza Kat:5, 34406 Kağıthane / İSTANBUL",
        CLIENT_IP : "123.44.66.38"
        })
    }
    const handleLoadDemoCard=()=>{
      setCard({
        CC_NUMBER : "4159562885391991",
        EXP_MONTH : "12",
        EXP_YEAR : "2023",
        CC_CVV : "000",
        CC_OWNER : "TEST USER",
        INSTALLMENT_NUMBER : "1"
      })
    }
    const handleLoadMeric=()=>{
      setCard({
        CC_NUMBER : process.env.REACT_APP_Mrc_KK_No,
        EXP_MONTH : process.env.REACT_APP_Mrc_KK_SK_Ay,
        EXP_YEAR : process.env.REACT_APP_Mrc_KK_SK_Yil,
        CC_CVV : process.env.REACT_APP_Mrc_KK_CVC,
        CC_OWNER : process.env.REACT_APP_Mrc_KK_Sahibi,
        INSTALLMENT_NUMBER : "1"
      })
    }
    const handleLoadFaruk=()=>{
      setCard({
        CC_NUMBER : process.env.REACT_APP_KK_No,
        EXP_MONTH : process.env.REACT_APP_KK_SK_Ay,
        EXP_YEAR : process.env.REACT_APP_KK_SK_Yil,
        CC_CVV : process.env.REACT_APP_KK_CVC,
        CC_OWNER : process.env.REACT_APP_KK_Sahibi,
        INSTALLMENT_NUMBER : "1"
      })
    }
    const handleLoadBoss=()=>{
      setCard({
        CC_NUMBER : process.env.REACT_APP_Boss_KK_No,
        EXP_MONTH : process.env.REACT_APP_Boss_KK_SK_Ay,
        EXP_YEAR : process.env.REACT_APP_Boss_KK_SK_Yil,
        CC_CVV : process.env.REACT_APP_Boss_KK_CVC,
        CC_OWNER : process.env.REACT_APP_Boss_KK_Sahibi,
        INSTALLMENT_NUMBER : "1"
      })
    }
    //////////////////////////////////////////////////////////////////
    const handleSubmit = async(e,state) => {
        e.preventDefault()
        var data = JSON.stringify({
            "Config": {
              ...merchant,
              "BACK_URL": `https://onlinekesif.com/dogrulama`,
              "PRICES_CURRENCY": "TRY",
              "ORDER_REF_NUMBER": state.doc,
              "ORDER_AMOUNT": String(state.totalPrice)
          },
            "CreditCard": {
              ...card,
            },
            "Customer": {
            ...customer,
            },
            "Product": [
              {
             "PRODUCT_ID" : state.id,
             "PRODUCT_NAME" : "Hizmet",
             "PRODUCT_CATEGORY" : "Hizmet",
             "PRODUCT_DESCRIPTION" : "Hizmet",
             "PRODUCT_AMOUNT" : String(state.totalPrice)
         }
            ]
            });

        var config = {
          method: 'post',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        try {
          const response= await axios("/EYV3DPay",config)
        
          console.log(response.data)
          window.open((response.data.URL_3DS));
          
        } catch (error) {
          navigate("/error");
          alert(error)
        }
    };
    const handleTest3D = async(e) => {
        e.preventDefault()
        var data = JSON.stringify({
          "Config" :  {
            "MERCHANT" : "TEST1234",
            "MERCHANT_KEY" : "4oK26hK8MOXrIV1bzTRVPA==",
            "BACK_URL" : "İşlem sonucunun üye iş yerine döndürüleceği url adresi",
            "PRICES_CURRENCY" : "TRY",
            "ORDER_REF_NUMBER" : "RFN0001",
            "ORDER_AMOUNT" : "150"
        },
        "CreditCard" : {
            "CC_NUMBER" : "4159562885391991",
            "EXP_MONTH" : "12",
            "EXP_YEAR" : "2023",
            "CC_CVV" : "000",
            "CC_OWNER" : "TEST USER",
            "INSTALLMENT_NUMBER" : "1"
        },
        "Customer" : {
            "FIRST_NAME" : "Firstname",
            "LAST_NAME" : "Lastname",
            "MAIL" : "destek@esnekpos.com",
            "PHONE" : "05435434343",
            "CITY" : "İstanbul",
            "STATE" : "Kağıthane",
            "ADDRESS" : "Merkez Mahallesi, Ayazma Cd. No:37/91 Papirus Plaza Kat:5, 34406 Kağıthane / İSTANBUL",
            "CLIENT_IP" : "123.44.66.38"
        },
        "Product" : [
            {
                "PRODUCT_ID" : "1",
                "PRODUCT_NAME" : "Ürün Adı 1",
                "PRODUCT_CATEGORY" : "Elektronik",
                "PRODUCT_DESCRIPTION" : "Ürün Açıklaması",
                "PRODUCT_AMOUNT" : "80"
            },
            {
                "PRODUCT_ID" : "2",
                "PRODUCT_NAME" : "Ürün Adı 1",
                "PRODUCT_CATEGORY" : "Ev Tekstili",
                "PRODUCT_DESCRIPTION" : "Ürün Açıklaması",
                "PRODUCT_AMOUNT" : "70"
            }
        ]
            });

        var config = {
          method: 'post',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        try {
          const response= await axios("/EYV3DPay",config)
        
          console.log(response.data)
          window.open((response.data.URL_3DS));
          
        } catch (error) {
          navigate("/error");
          alert(error)
        }
    };
    
    return { 
      handleFocus, 
      handleSubmit, 
      values, 
      errors,
      customer,
      card,
      product,
      handleChangeEsnekCard,
      handleChangeCustomer, 
      handleChangeProduct,
      //demoyükleme
      handleLoadDemoCustomer,
      handleLoadDemoCard,
      handleLoadMeric,
      handleLoadFaruk,
      handleLoadBoss

    };
};

export default useForm; 