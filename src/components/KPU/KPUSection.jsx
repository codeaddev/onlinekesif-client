import React from "react";
import ColoredHeader from "../sectionHeaders/ColoredHeader";
import SectionHeader from "../sectionHeaders/SectionHeader";
import KPULogo from "./kpu.svg";
import KPUBig from "./kpu.right.svg";

const KPUSection = () => {
  return (
    <div className="section KPU">
      <div className="left">
        <div className="row">
          <img src={KPULogo} alt="" />
          <SectionHeader>
            <strong>Kalite</strong>
            <ColoredHeader bg={"green"}>Puanı</ColoredHeader>
          </SectionHeader>
        </div>
        <h5>Firmaların Kalite Puanları Hakkında Bilmeniz Gerekenler </h5>
        <p>
          Kalite puanı, seçtiğiniz firmaların sizler ile iletişiminden yaptığı
          işlemlerin kalitesine kadar birçok etkeni içinde barındırır. Kalite
          puanı seçtiğiniz firmalardan beklentilerinizin ne kadar faydalı
          olacağını önceden bilmenizi ve müşterisine değer veren firmaları
          birbirinden ayırmanızı sağlar. Hizmetinden yararlandığınız firmaların
          kalite puanlarını aldığınız işin kalitesine göre vermek sizin
          elinizdedir. Bu yüzden firmaların herhangi bir şekilde sizlere verdiği
          hizmeti en üst kalitede sunabilmesi firma açısından da kalite puanı
          yükseltmesine olanak sağlar. Bu puanlama sayesinde firmalar
          müşterilerin kendilerini seçme ihtimalini de arttırmış olur.
        </p>
      </div>
      <div className="right">
        <img src={KPUBig} alt="" />
      </div>
    </div>
  );
};

export default KPUSection;
