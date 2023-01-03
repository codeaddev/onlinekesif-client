import React from 'react'
import Back from "./back.svg"
import Foto1 from "./kombi-serivisi-bursa-01.jpg"
import Foto2 from "./air-conditioner-technician-checking-air-conditioner-operation.jpg"
import Foto3 from "./alttan-isitma-bursa-06.jpg"
import Foto4 from "./technician-servicing-hot-water-heater.jpg"
import Foto5 from "./air-conditioner-technician-repairing-central-air-conditioning-system-with-outdoor-tools.jpg"
import SectionHeader from '../sectionHeaders/SectionHeader'

const WhatWeDo = () => {
  return (
    <div
    className="section we-do">

        
        <SectionHeader><strong><u>Online Keşif</u></strong>sizin için ne yapıyor?</SectionHeader>
        <div className="top">
          <div className="left">
            <div className="left-foto">
              <img className="foto-left-top" src={Foto1} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="text-box">
            
              <p>Yaşam alanlarınız için ihtiyaç duyduğunuz hizmetin tüm özelliklerini birlikte belirleyelim.</p>
            </div>
             
          </div>
        </div>


        <div className="bottom">
          <div className="left">
          <div className="text-box">
            
              <p>İhtiyacınız doğrultusunda size hizmet verecek en uygun firmayı seçmenize yardımcı olalım.</p>
            </div>
          </div>
          <div className="right">
              
                <img className="foto-right-top" src={Foto4} alt="" />
                <img className="foto-right-bottom"src={Foto5} alt="" />
            
              </div>
        </div>
        
    </div>
        
  )
}

export default WhatWeDo