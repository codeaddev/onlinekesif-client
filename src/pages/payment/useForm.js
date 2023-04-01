
import { useContext, useState } from 'react'
import validateInfo from './validateInfo';
import axios from 'axios';
import { AuthenticationContext } from '../../context/authentication';
import { auth, db } from '../../firebase/firebase.config';
import { addDoc, collection, doc, setDoc, updateDoc } from 'firebase/firestore';

const useForm = () => {

  const {userData}=useContext(AuthenticationContext)
    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardType: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardPostalCode: '',
        focus: ''
    })
    const [user,setUser]=useState({
    FIRST_NAME:auth?.currentUser?.displayName,
    LAST_NAME:userData?.lastName,
    MAIL:auth?.currentUser?.email,
    PHONE:userData?.phone,
    CITY:"Bursa",
    STATE:"",
    ADDRESS:userData?.address,
    CLIENT_IP:"191.101.231.155",
  })
  const [card,setCard]=useState({
    CC_NUMBER:"",
    
    CC_CVV:"",
    CC_OWNER:"",
    })
  const [product,setProduct]=useState({
    PRODUCT_ID:"1",
    PRODUCT_NAME:"Hizmet",
    PRODUCT_CATEGORY:"Hizmet",
    PRODUCT_DESCRIPTION:"Hizmet",
    PRODUCT_AMOUNT:"1",
  })
  const [SKT,setSKT]=useState({
    EXP_MONTH:"",
    EXP_YEAR:"",
  })
  const [installment,setInstallment]=useState({
    INSTALLMENT_NUMBER:"1",
    
  })
  const [RFNumber,setRFNumber]=useState(null)

    const [errors, setErrors] = useState({})

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

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleChangeInstallment = e => {
        const { name, value } = e.target
        setInstallment({
            ...installment,
            [name]: value
        })
    }
    const handleChangeUser = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleChangeCard = e => {
        const { name, value } = e.target
        setCard({
            ...card,
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
    const handleChangeSKT = e => {
        const { name, value } = e.target
        setSKT({
            ...SKT,
            [name]: value
        })
    }
    const demo=()=>{
        setUser()
    }
    const handleSubmit = (e,rfn) => {
        e.preventDefault()
        //setErrors(validateInfo(values))
       var RFN=new Date().valueOf().toString(5)
       setRFNumber(RFN)
      var data = JSON.stringify({
        "Config": {
          "MERCHANT": "onlinekesif.com",
          "MERCHANT_KEY": "S7i1ax6Rg2GPZTpcR6Nv2XXQJIHoQYyXNGnpXWH7n013xo2VM2LDYg==" ,
          "BACK_URL": `http://localhost:3001/validasyon/${rfn}`,
          "PRICES_CURRENCY": "TRY",
          "ORDER_REF_NUMBER": rfn,
          "ORDER_AMOUNT": "1"
      },
  "CreditCard": {
    ...card,
    ...SKT,
    ...installment,
  },
  "Customer": {
    ...user,
    "CLIENT_IP": "78.186.176.170"
  },
  "Product": [
    {
      "PRODUCT_ID": "1",
      "PRODUCT_NAME": "Ürün Adı 1",
      "PRODUCT_CATEGORY": "Elektronik",
      "PRODUCT_DESCRIPTION": "Test Ödemeleri",
      "PRODUCT_AMOUNT": "1"
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

axios("/EYV3DPay",config)
.then(function (response) {
  console.log(response)
  window.open((response.data.URL_3DS));
  
})
.catch(function (error) {
  navigate("/error");
  alert(error)
});


    };
    
    return { handleChange, handleFocus, handleSubmit, values, errors,user,card,product,SKT,handleChangeSKT, handleChangeUser,handleChangeCard, handleChangeProduct,handleChangeInstallment,installment};
};

export default useForm; 