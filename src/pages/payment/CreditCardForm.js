import React, { useState } from "react";

import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.scss";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import useForm from "./useForm";
import { Bursa, BursaDistricts } from "../../components/data/bursa/ditricts";

const CreditCardForm = ({ state,}) => {
  const {
    handleFocus,
    values,
    errors,
    user,
    card,
    handleChangeUser,
    handleChangeCard,
    handleChangeProduct,
    product,

    handleLoadTestCard,
    handleSubmitTestPayment,
    handleLoadProductFromState,
    handleSubmitPayment,
    handleLoadRealTestCard
  } = useForm();
  var money = 100;

  const [realTest,setRealTest]=useState(false)
  const taksits = [
    { id: "01", count: "1", payment: `${money} TL` },
    { id: "02", count: "2", payment: `${money * 0.19 + money / 2} TL` },
    { id: "03", count: "3", payment: `${money} TL` },
    { id: "04", count: "4", payment: `${money} TL` },
    { id: "05", count: "5", payment: `${money} TL` },
    { id: "06", count: "6", payment: `${money} TL` },
    { id: "07", count: "7", payment: `${money} TL` },
    { id: "08", count: "8", payment: `${money} TL` },
    { id: "09", count: "9", payment: `${money} TL` },
    { id: "10", count: "10", payment: `${money} TL` },
    { id: "11", count: "11", payment: `${money} TL` },
    { id: "12", count: "12", payment: `${money} TL` },
  ];
  var families = [
    { id: "01", field: "advantage", label: "Advantage", svg: "" },
    { id: "02", field: "axess", label: "Axess", svg: "" },
    { id: "03", field: "bonus", label: "Bonus", svg: "" },
    { id: "04", field: "cardfinans", label: "CardFinans", svg: "" },
    { id: "05", field: "combo", label: "Combo", svg: "" },
    { id: "06", field: "maximum", label: "Maximum", svg: "" },
    { id: "07", field: "paraf", label: "Paraf", svg: "" },
    { id: "08", field: "saglamkart", label: "Sağlam Kart", svg: "" },
    { id: "09", field: "world", label: "World", svg: "" },
    { id: "10", field: "yurtdısı", label: "Yurtdışı", svg: "" },
  ];
  const [checked, setChecked] = useState(false);

  const CheckedTarget = () => {
    return (
      <div className="target-page-link">
        <a href="http://localhost:3001/KVKK" target={"_blank"}>
          Mesafeli Satış Sözleşmesini
        </a>{" "}
        okudum anladım.
      </div>
    );
  };
  let TLLocale = Intl.NumberFormat("tr-TR");

  return (
    <div
      className="formDiv-container"
      
    >
      <div className="formDiv">
        <Form
          className="form"
          onSubmit={(e)=>{
            e.preventDefault()
            realTest?
            handleSubmitPayment(e)
            :handleSubmitTestPayment(e)
          }}
        >
          <div className="left">
            <Form.Group>
              <Form.Control
                type="text"
                id="FIRST_NAME"
                data-testid="FIRST_NAME"
                name="FIRST_NAME"
                placeholder="Müşteri Adı"
                value={user.FIRST_NAME}
                onChange={handleChangeUser}
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
                value={user.LAST_NAME}
                onChange={handleChangeUser}
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
                value={user.MAIL}
                onChange={handleChangeUser}
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
                value={user.PHONE}
                onChange={handleChangeUser}
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
                value={user.CITY}
                onChange={handleChangeUser}
              >
                <option value="" disabled selected>
                  --il seçiniz--
                </option>
                {Bursa.map((i) => {
                  return <option>{i.label}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Select
                id="STATE"
                data-testid="STATE"
                name="STATE"
                size="lg"
                value={user.STATE}
                onChange={handleChangeUser}
              >
                <option value="" disabled selected>
                  --ilçe seçiniz--
                </option>
                {BursaDistricts.map((i) => {
                  return <option>{i}</option>;
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Control
                as="textarea"
                rows={3}
                style={{ resize: "none" }}
                type="text"
                id="ADDRESS"
                data-testid="ADDRESS"
                name="ADDRESS"
                placeholder="Müşteri Açık Adresi"
                value={user.ADDRESS}
                onChange={handleChangeUser}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
          </div>

          <div className="right">
            <div className="paymentInfo">
              <span className="title">Toplam Bedel</span>
              <span className="number">
                {TLLocale.format(state?.totalPrice)} ₺
              </span>
            </div>
            <div className="test-row" >
              <Button onClick={()=>setRealTest(pre=>!pre)} >{realTest?"Şuan Gerçek Test Formatındasınız":"Şuan Test Formatındasınız"}</Button>
            </div>
            {!realTest&&<Button onClick={handleLoadTestCard} >Test kart yükle</Button>}
            {realTest&&<Button onClick={handleLoadRealTestCard} >Gerçek test kart yükle</Button>}
            <div className="creditCard">
              <Cards
                cvc={card.KK_CVC}
                expiry={card.KK_SK_Ay + card.KK_SK_Yil}
                focused={values.focus}
                name={card.KK_Sahibi}
                number={card.KK_No}
              />
            </div>

            <Form.Group>
              <Form.Control
                type="text"
                id="KK_Sahibi"
                data-testid="KK_Sahibi"
                name="KK_Sahibi"
                placeholder="Kart Sahibinin İsmi"
                value={card.KK_Sahibi}
                onChange={handleChangeCard}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                id="KK_No"
                data-testid="KK_No"
                name="KK_No"
                placeholder="Kart Numarası"
                value={card.KK_No}
                onChange={handleChangeCard}
                onFocus={handleFocus}
                isValid={errors.cnumber}
              />
            </Form.Group>
            <Row>
              <Col xs={3}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="KK_SK_Ay"
                    data-testid="KK_SK_Ay"
                    name="KK_SK_Ay"
                    placeholder="SKT Ay"
                    value={card.KK_SK_Ay}
                    onChange={handleChangeCard}
                    onFocus={handleFocus}
                    isValid={errors.cexp}
                  />
                </Form.Group>
              </Col>
              <Col xs={3}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="KK_SK_Yil"
                    data-testid="KK_SK_Yil"
                    name="KK_SK_Yil"
                    placeholder="SKT Yıl"
                    value={card.KK_SK_Yil}
                    onChange={handleChangeCard}
                    onFocus={handleFocus}
                    isValid={errors.cexp}
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Control
                    type="number"
                    id="KK_CVC"
                    data-testid="KK_CVC"
                    name="KK_CVC"
                    placeholder="CVV"
                    value={card.KK_CVC}
                    onChange={handleChangeCard}
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
              value={product.Taksit}
              onChange={handleChangeProduct}
            >
              <option value="" disabled selected>
                --taksit seçiniz--
              </option>
              {taksits.map((i) => {
                return <option>{i.count}</option>;
              })}
            </Form.Select>
            <Form.Check
              required
              type={"checkbox"}
              id={`default`}
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              label={<CheckedTarget />}
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
      {errors.message && (
        <Alert
          id="alertMessage"
          data-testid="alertMessage"
          variant={errors.variant}
          show={errors.show}
        >
          {errors.message}
        </Alert>
      )}
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
