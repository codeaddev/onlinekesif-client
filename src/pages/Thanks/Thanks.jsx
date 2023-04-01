import React from 'react'
import SectionHeader from '../../components/sectionHeaders/SectionHeader'
import Check from "./check.svg"
import "./thanks.scss"


const Thanks = () => {
   
  return (
    <div className='thanks-page'>
      <SectionHeader><strong className='splitted'><u>TEŞEKKÜRLER</u></strong></SectionHeader>
      <img className='check-done' src={Check} alt="tesekkurler" />
      <div className="message">İsteğiniz bize ulaştı</div>
      <button>yükle</button>
    </div>
  )
}

export default Thanks