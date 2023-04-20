import React from "react";

const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="paymentMethod">
      <div
        onClick={() => setPaymentMethod("credit")}
        className={`selector ${
          paymentMethod === "credit" ? "selected" : "nonselected"
        }`}
      >
        Kredi Kartı
      </div>
      <div
        onClick={() => setPaymentMethod("debit")}
        className={`selector ${
          paymentMethod === "debit" ? "selected" : "nonselected"
        }`}
      >
        Havale / EFT
      </div>
    </div>
  );
};

export default PaymentMethod;
