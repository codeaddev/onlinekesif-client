import React from "react";

import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";
import useForm from "./useForm";


const CreditCardForm = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  const fetchInstallments=()=>{
    var axios = require('axios');
var data = JSON.stringify({
  "MERCHANT": "codead.com.tr",
  "MERCHANT_KEY": "xmRzaOKj6+rf6Fn/cxXgVUwiRO4pkKDVfaHaPE7bGfNICVHPS9YlNg=="
});

var config = {
  method: 'post',
  url: 'https://posservice.esnekpos.com/api/services/GetInstallments',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
   

  }
  return (
   
        <div
        className="formDiv-container"
        //className="box justify-content-center align-items-center"
        >
          <div className="formDiv">
          <div className="creditCard">
          <Cards
            cvc={values.cardSecurityCode}
            expiry={values.cardExpiration}
            focused={values.focus}
            name={values.cardName}
            number={values.cardNumber}
          />
          </div>
          <Form 
          
          onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                id="cardName"
                data-testid="cardName"
                name="cardName"
                placeholder="Kart Sahibinin İsmi"
                value={values.cardName}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                id="cardNumber"
                data-testid="cardNumber"
                name="cardNumber"
                placeholder="Kart Numarası"
                value={values.cardNumber}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cnumber}
                
              />
            </Form.Group>
            <Row>
            
              {/* <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="cardType"
                    id="cardType"
                    data-testid="cardType"
                    placeholder="Card Type"
                    value={values.cardType}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ctype}
                  />
                </Form.Group>
              </Col> */}
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="cardExpiration"
                    data-testid="cardExpiration"
                    name="cardExpiration"
                    placeholder="SKT"
                    value={values.cardExpiration}
                    
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cexp}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="number"
                    id="cardSecurityCode"
                    data-testid="cardSecurityCode"
                    name="cardSecurityCode"
                    placeholder="Güvenlik Kodu"
                    value={values.cardSecurityCode}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ccvv}
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Button
              size={"block"}
              className="button full"
              data-testid="validateButton"
              id="validateButton"
              type="submit"
            >
              Ödemeyi Tamamla
            </Button>
          </Form>
          </div>
          {errors.message&&<Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>}
          <Button
              size={"block"}
              className="button full"
              data-testid="validateButton"
              id="validateButton"
              onClick={fetchInstallments}
            >
              Taksitleri Çek
            </Button>
        </div>
     
  );
};

export default CreditCardForm;