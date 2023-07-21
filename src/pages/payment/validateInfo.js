import valid from "card-validator";

export default function validateInfo(values) {
  let errors = {};
  let creditCard = valid.number(values.cardNumber);

  creditCard.expirationDate = valid.expirationDate(values.cardExpiration);
  creditCard.cvv = valid.cvv(values.cardSecurityCode);
  creditCard.cardholderName = valid.cardholderName(values.cardName);
  creditCard.postalCode = valid.postalCode(values.cardPostalCode);

  errors.show = true;
  errors.variant = "danger";
  errors.message =
    "Bir hata meydana geldi. Lütfen daha sonra tekrar deneyiniz.";
  errors.cname = false;
  errors.cnumber = false;
  //errors.ctype = false;
  errors.cexp = false;
  errors.ccvv = false;
  //errors.cpostal = false;

  //   if (values.cardPostalCode === null || !values.cardPostalCode.trim()) {
  //     errors.message = "Credit card postal code is not complete";
  //   } else if (creditCard.postalCode.isValid) {
  //     errors.cpostal = true;
  //   } else {
  //     errors.message = "Credit card postal code is invalid";
  //   }

  //Card CVV expiration
  if (values.cardSecurityCode === null || !values.cardSecurityCode.trim()) {
    errors.message = "Kredi kartı CVC kodu eksik";
  } else if (creditCard.cvv.isValid) {
    errors.ccvv = true;
  } else {
    errors.message = "Kredi kartı CVC kodu hatalı";
  }

  //Card Expiration Verification
  if (values.cardExpiration === null || !values.cardExpiration.trim()) {
    errors.message = "Kredi Kartı son kullanma tarih bilgisi eksik";
  } else if (creditCard.expirationDate.isValid) {
    errors.cexp = true;
  } else {
    errors.message = "Kredi Kartı son kullanma tarih bilgisi hatalı";
  }

  //   //Card Type Verification
  //   if (
  //     values.cardType === null ||
  //     !values.cardType.trim() ||
  //     creditCard.card === null
  //   ) {
  //     errors.message = "Credit card type is not complete";
  //   } else if (
  //     creditCard.card.type &&
  //     creditCard.card.type.toUpperCase() === values.cardType.toUpperCase()
  //   ) {
  //     errors.ctype = true;
  //   } else {
  //     errors.message = "Credit card type is invalid";
  //   }

  //Card Number Verification
  if (values.cardNumber === null || !values.cardNumber.trim()) {
    errors.message = "Kredi Kartı numarası eksik";
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    errors.message = "Kredi Kartı numarası hatalı";
  }

  //Cardholder Name Verification
  if (values.cardName === null || !values.cardName.trim()) {
    errors.message = "Kart sahibinin ismi eksik";
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message = "Kart sahibinin ismi hatalı";
  }

  if (
    //errors.ctype &&
    errors.cname &&
    errors.cnumber &&
    errors.cexp &&
    //errors.cpostal &&
    errors.ccvv
  ) {
    errors.variant = "success";
    errors.message = "Kredi Kartı bilgileri doğru";
  }

  return errors;
}
