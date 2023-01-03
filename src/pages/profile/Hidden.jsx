import React from 'react'
import { auth } from '../../firebase/firebase.config'
import EmptyFoto from  "../../components/svg/emptyfoto.svg"
import Plus from  "../../components/svg/plus.svg"
import Down from  "../../components/sidelinks/svg/bigChevron.svg"
import { useState } from 'react'
import SideLinks from '../../components/sidelinks/SideLinks'

function Hidden() {
const [className,setClassName]=useState("closed")
const Links=[
    {id:"01",label:"Hesabım",to:"hizmetler"},
    {id:"02",label:"Tekliflerim",to:"neden-online-keşif"},
    {id:"03",label:"Ayarlar",to:"biz-kimiz"},
  ]
  return (
    <div
    className='hidden-menu'
    >

        <div 
        onClick={()=>setClassName(pre=>pre==="closed"?"opened":"closed")}
        className="drop">
        <img 
            className='icon'
            src={Down}alt="" />
        </div>

        <div className={`submenu ${className}`}>
            
            <SideLinks/>
        </div>


        
    </div>
  )
}

export default Hidden