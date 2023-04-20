import React from "react";

const Topbar = ({ selected, setSelected }) => {
  return (
    <div className="topbar">
      <div
        onClick={() => setSelected("credit")}
        className={`selector ${
          selected === "credit" ? "selected" : "nonselected"
        }`}
      >
        <div className="choice">
          <div
            className={`title ${
              selected === "credit" ? "selected" : "nonselected"
            }`}
          >
            Kredi Kartı
          </div>
          <div className="text">
            Kredi Kartı kullanarak ödemenizi güvenle yapabilirsiniz.
          </div>
        </div>
      </div>
      <div
        onClick={() => setSelected("debit")}
        className={`selector ${
          selected === "debit" ? "selected" : "nonselected"
        }`}
      >
        <div className="choice">
          <div
            className={`title ${
              selected === "debit" ? "selected" : "nonselected"
            }`}
          >
            Havale / EFT
          </div>
          <div className="text">
            Hesabınızdan EFT / Havale ile ödeme yapabilirsiniz
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
