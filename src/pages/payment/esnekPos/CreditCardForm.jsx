import React, { useState } from "react";

import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CreditCardForm.scss";
import Cards from "react-credit-cards-2";

import useForm from "./useForm";
import { Bursa, BursaDistricts } from "../../../components/data/bursa/ditricts";


const CreditCardForm = ({state}) => {
  const { 
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
  
  } = useForm();
  const [realTest,setRealTest]=useState(false)
    var money=100
    const taksits=[
      {id:"01",count:"1",payment:`${money} TL`},
      {id:"02",count:"2",payment:`${((money)*0.19)+(money/2)} TL`},
      {id:"03",count:"3",payment:`${money} TL`},
      {id:"04",count:"4",payment:`${money} TL`},
      {id:"05",count:"5",payment:`${money} TL`},
      {id:"06",count:"6",payment:`${money} TL`},
      {id:"07",count:"7",payment:`${money} TL`},
      {id:"08",count:"8",payment:`${money} TL`},
      {id:"09",count:"9",payment:`${money} TL`},
      {id:"10",count:"10",payment:`${money} TL`},
      {id:"11",count:"11",payment:`${money} TL`},
      {id:"12",count:"12",payment:`${money} TL`},
  ]
  
    const [checked,setChecked]=useState(false)
      const CheckedTarget=()=>{
        return(
          <div
          className="target-page-link"
          >
          <a 
          
          href="http://localhost:3000/KVKK" target={"_blank"}>Mesafeli Satış Sözleşmesini</a> okudum anladım.</div>
        )
}
  let TLLocale = Intl.NumberFormat('tr-TR');

  return (
   
        <div
        className="formDiv-container"
        //className="box justify-content-center align-items-center"
        >
          <div className="formDiv">
            
          <Form 
          className="form"
          onSubmit={(e)=>handleSubmit(e,state)}>
            <div className="left">
            <Button onClick={handleLoadDemoCustomer}>Demo müşteri yükle</Button>
            
            <Form.Group>
              <Form.Control
                type="text"
                id="FIRST_NAME"
                data-testid="FIRST_NAME"
                name="FIRST_NAME"
                placeholder="Müşteri Adı"
                value={customer.FIRST_NAME}
                onChange={handleChangeCustomer}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                id="LAST_NAME"
                data-testid="LAST_NAME"
                name="LAST_NAME"
                placeholder="Müşteri Soyadı"
                value={customer.LAST_NAME}
                onChange={handleChangeCustomer}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                id="MAIL"
                data-testid="MAIL"
                name="MAIL"
                placeholder="Müşteri E-Posta"
                value={customer.MAIL}
                onChange={handleChangeCustomer}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                id="PHONE"
                data-testid="PHONE"
                name="PHONE"
                placeholder="Müşteri Telefon"
                value={customer.PHONE}
                onChange={handleChangeCustomer}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
            
            <Form.Group>
            <Form.Select 
            id="CITY"
            data-testid="CITY"
            name="CITY"
            size="lg"
            value={customer.CITY}
            onChange={handleChangeCustomer}
            >
              <option value="" disabled selected>--il seçiniz--</option>
            {Bursa.map(i=>{
                        return(
                            <option>{i.label}</option>
                        )
                    })}
            </Form.Select>
            </Form.Group>
            <Form.Group>
            <Form.Select 
            id="STATE"
            data-testid="STATE"
            name="STATE"
            size="lg"
            value={customer.STATE}
            onChange={handleChangeCustomer}
            >
              <option value="" disabled selected>--ilçe seçiniz--</option>
            {BursaDistricts.map(i=>{
                        
                        return(
                            <option>{i}</option>
                        )
                    })}
            </Form.Select>
            </Form.Group>
            
            <Form.Group>
              <Form.Control
              as="textarea" rows={3}
                style={{resize:"none"}}
                type="text"
                id="ADDRESS"
                data-testid="ADDRESS"
                name="ADDRESS"
                placeholder="Müşteri Açık Adresi"
                value={customer.ADDRESS}
                onChange={handleChangeCustomer}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
            </div>
          
          <div className="right">
            <div className="paymentInfo">
                    <span className="title">Toplam Bedel</span>
                    <span className="number">{TLLocale.format(state?.totalPrice)} ₺</span>
            </div>

            {/* <div className="test-row" >
              <Button onClick={()=>setRealTest(pre=>!pre)} >{realTest?"Şuan Gerçek Test Formatındasınız":"Şuan Test Formatındasınız"}</Button>
            </div> */}
            {/* {!realTest&&<Button onClick={handleLoadDemoCard}>Test kart yükle</Button>}
            {realTest&&<Button onClick={handleLoadMeric} >Meriç test kart yükle</Button>}
            {realTest&&<Button onClick={handleLoadFaruk} >Faruk test kart yükle</Button>}
            {realTest&&<Button onClick={handleLoadBoss} >Boss test kart yükle</Button>} */}
          <div className="creditCard">
              
              <Cards
                cvc={card.CC_CVV}
                expiry={card.EXP_MONTH+card.EXP_YEAR}
                focused={values.focus}
                name={card.CC_OWNER}
                number={card.CC_NUMBER}
              />
          </div>
        
          <Form.Group>
            <Form.Control
              type="text"
              id="CC_OWNER"
              data-testid="CC_OWNER"
              name="CC_OWNER"
              placeholder="Kart Sahibinin İsmi"
              value={card.CC_OWNER}
              onChange={handleChangeEsnekCard}
              onFocus={handleFocus}
              isValid={errors.cname}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="number"
              id="CC_NUMBER"
              data-testid="CC_NUMBER"
              name="CC_NUMBER"
              placeholder="Kart Numarası"
              value={card.CC_NUMBER}
              onChange={handleChangeEsnekCard}
              onFocus={handleFocus}
              isValid={errors.cnumber}
              
            />
          </Form.Group>
          <Row>
            <Col xs={3}>
              <Form.Group>
                <Form.Control
                  
                  type="text"
                  id="EXP_MONTH"
                  data-testid="EXP_MONTH"
                  name="EXP_MONTH"
                  placeholder="SKT Ay"
                  value={card.EXP_MONTH}
                  
                  onChange={handleChangeEsnekCard}
                  onFocus={handleFocus}
                  isValid={errors.cexp}
                />
              </Form.Group>
            </Col>
            <Col  xs={3}>
              <Form.Group>
                <Form.Control
                  type="text"
                  id="EXP_YEAR"
                  data-testid="EXP_YEAR"
                  name="EXP_YEAR"
                  placeholder="SKT Yıl"
                  value={card.EXP_YEAR}
                  
                  onChange={handleChangeEsnekCard}
                  onFocus={handleFocus}
                  isValid={errors.cexp}
                />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group>
                <Form.Control
                  type="number"
                  id="CC_CVV"
                  data-testid="CC_CVV"
                  name="CC_CVV"
                  placeholder="CVV"
                  value={card.CC_CVV}
                  onChange={handleChangeEsnekCard}
                  onFocus={handleFocus}
                  isValid={errors.ccvv}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Select 
          id="INSTALLMENT_NUMBER"
          data-testid="INSTALLMENT_NUMBER"
          name="INSTALLMENT_NUMBER"
          size="lg"
          value={card.INSTALLMENT_NUMBER}
          onChange={handleChangeEsnekCard}
          >
            <option value="" disabled selected>--taksit seçiniz--</option>
          {taksits.map(i=>{
                      return(
                          <option>{i.count}</option>
                      )
                  })}
          </Form.Select>
          <Form.Check
          
          required
          type={"checkbox"}
          id={`default`}
          checked={checked}
          onChange={(e)=>setChecked(e.target.checked)}
          label={<CheckedTarget/>}
        />
          <Button
            size={"block"}
            className="button full"
            data-testid="validateButton"
            id="validateButton"
            type="submit"
          >
            Ödemeyi Tamamla
          </Button>
          </div>
            
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
          {/* <Button
              size={"block"}
              className="button full"
              data-testid="validateButton"
              id="validateButton"
              onClick={fetchInstallments}
            >
              Taksitleri Çek
            </Button> */}
        </div>
     
  );
};

export default CreditCardForm;