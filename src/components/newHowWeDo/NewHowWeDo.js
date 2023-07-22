import React from "react";
import "./new.scss";
import Label1 from "./svg/label1.svg";
import Label2 from "./svg/label2.svg";
import Label3 from "./svg/label3.svg";
import Label4 from "./svg/label4.svg";

const NewHowWeDo = () => {
  return (
    <div className="new-container">
      <div className="new-container-content">
        <div className="new-container-content-header">
          <h2>Hizmetin Profesyonel Hali.</h2>
          <p>
            Teknik sektörleri tamamen dönüştürmek için tamamen yeni bir
            teknoloji geliştirdik.
          </p>
        </div>
        <div className="underline"></div>
        <div className="new-container-content-info">
          <div className="new-container-content-info-item">
            <div className="new-container-content-info-item-title">
                <h3>Online Keşif</h3>
                <img src={Label1} alt="label" />
            </div>
            <p>Müşterilerin ihtiyaçlarına yönelik verdiği cevaplar üzerine keşif raporunu hazırlar ve işlemin en iyi şekilde gerçekleştirilmesini sağlar.</p>
          </div>
          <div className="new-container-content-info-item">
            <div className="new-container-content-info-item-title">
                <h3>Firmalar</h3>
                <img src={Label3} alt="label" />
            </div>
            <p>Mevcut keşif formunu ne eksik ne fazla olacak şekilde fiyatlandırır.</p>
          </div>
          <div className="new-container-content-info-item">
            <div className="new-container-content-info-item-title">
                <h3>Müşteriler</h3>
                <img src={Label4} alt="label" />
            </div>
            <p>Talep ettikleri hizmete teklif veren firmalardan birini seçerler.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHowWeDo;
