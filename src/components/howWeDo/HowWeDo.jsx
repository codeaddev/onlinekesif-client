import React from 'react'
import MiniExplain from '../sectionHeaders/MiniExplain'
import SectionHeader from '../sectionHeaders/SectionHeader'
import Label1 from "./svg/label1.svg"
import Label2 from "./svg/label2.svg"
import Label3 from "./svg/label3.svg"
import Label4 from "./svg/label4.svg"

const HowWeDo = () => {
  return (
    <div className="section how-works">
          <SectionHeader>Online Keşif <strong><u>Nasıl Çalışıyor?</u></strong></SectionHeader>
          {/* <MiniExplain>İhtiyacınızı anlamaya yönelik sorulan soruları cevaplayın, biz de ihtiyacınızı listeleyelim.</MiniExplain> */}
          <div className="top">
            <div className="left">
                <label>1<img src={Label1} alt="label" /></label>
                
                <h5>Keşif Talebi Oluşturun</h5>
                <p>Adımları takip ederek ihtiyaçlarınızı belirleyebilir</p>
                
            </div>
            <div className="right">
                <label>2<img src={Label2} alt="label" /></label>
                
                <h5>Fiyat Teklifi Alın</h5>
                <p>İhtiyaç duyduğunuz hizmeti veren firmaların size özel sunduğu teklifleri inceleyebilir</p>
            </div>
          </div>

          <div className="bottom">
          <div className="left">
                <label>3<img src={Label3} alt="label" /></label>
                
                <h5>Firma İle Anlaşın</h5>
                <p>Size en uygun gelen teklifi kabul ederek  firma ile iletişime geçebilir</p>
          </div>
            <div className="right">
            <label>4<img src={Label4} alt="label" /></label>
            
                <h5>Sonuca Ulaşın</h5>
                <p>Online Keşif sayesinde ihtiyaç duyduğunuz çözüme ulaşabilirsiniz.</p>
            </div>
          </div>
    </div>
  )
}

export default HowWeDo