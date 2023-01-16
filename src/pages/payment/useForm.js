
import { useState } from 'react'
import validateInfo from './validateInfo';

const useForm = () => {
    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardType: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardPostalCode: '',
        focus: ''
    })

    const [errors, setErrors] = useState({})

    const handleFocus = (e) => {
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

    const handleSubmit = e => {
        e.preventDefault()
        //setErrors(validateInfo(values))
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "Config": {
    "MERCHANT": "codead.com.tr",
    "MERCHANT_KEY": "xmRzaOKj6+rf6Fn/cxXgVUwiRO4pkKDVfaHaPE7bGfNICVHPS9YlNg==",
    "BACK_URL": "https://onlinekesif.com/odeme",
    "PRICES_CURRENCY": "TRY",
    "ORDER_REF_NUMBER": "RFN0004",
    "ORDER_AMOUNT": "1"
  },
  "CreditCard": {
    "CC_NUMBER": "5440789937131022",
    "EXP_MONTH": "12",
    "EXP_YEAR": "2024",
    "CC_CVV": "179",
    "CC_OWNER": "ÖMER FARUK YAMAN",
    "INSTALLMENT_NUMBER": "1"
  },
  "Customer": {
    "FIRST_NAME": "Faruk",
    "LAST_NAME": "Keskinsoy",
    "MAIL": "f.keskinsoy@codead.com.tr",
    "PHONE": "05308652184",
    "CITY": "Bursa",
    "STATE": "Nilüfer",
    "ADDRESS": "Üçevler Mahallesi Tanay Cad. No:19 Kat:2 D:4 Nilüfer/Bursa",
    "CLIENT_IP": "191.101.231.155"
  },
  "Product": [
    {
      "PRODUCT_ID": "1",
      "PRODUCT_NAME": "Tadilat Hizmeti",
      "PRODUCT_CATEGORY": "Genel",
      "PRODUCT_DESCRIPTION": "Ödemeleri",
      "PRODUCT_AMOUNT": "1"
    }
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
  mode:"no-cors"
};

fetch("https://posservice.esnekpos.com/api/pay/EYV3DPay", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

    };
    
    return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm; 