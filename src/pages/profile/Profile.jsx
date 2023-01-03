import React, { useContext, useEffect } from 'react'
import "./profile.scss"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import Widgets from '../../components/Widgets/Widgets'
import Hidden from './Hidden'
import Column from './columns/Column'
import { CloudContext } from '../../context/cloudContext'
import { sendMail } from '../../context/mail'


function Profile({setMainList,}) {
  const {myJobs}=useContext(CloudContext)

  const data =[
    
    {id:"01",headBar:"Teklif Bekleyen", data:myJobs?.filter(i=>i.Offers.length<1),svg:"AnyIcon",add:true,emptyMessage:"Henüz teklif bekleyen hizmet talebiniz bulunmamaktadır."},
    {id:"02",headBar:"Açık Keşifler", data:myJobs?.filter(i=>i.Offers.length>0&&!i.completed),svg:"AnyIcon",add:true,emptyMessage:"Henüz açık hizmet talebiniz bulunmamaktadır.",setState:"",},
    {id:"03",headBar:"Tamamlandı", data:myJobs?.filter(i=>i.completed||i.expired),svg:"AnyIcon",emptyMessage:"Henüz tamamlanan hizmetiniz bulunmamaktadır."},
    {id:"04",headBar:"DUYURULAR", data:[],svg:"AnyIcon"},
  ]


  return (
    <div className='profile'>
      
      <div className="profile-container">
        <Hidden/>
        <Sidebar/>

        <div className="profile-inner-container">
          <div className="top">
            <Widgets myJobs={myJobs}/>
          </div>
          <div className="bottom">
            {data.map(i=>{
              return(
                <Column 
                key={i.id} 
                item={i}
                setMainList={setMainList}
                />
              )
            })}
          </div>
          <div 
          onClick={()=>sendMail("Faruk","farukkeskinsoy88@gmail.com","Deneme Başlık","Deneme içerik")}
          className="sendEmail">
            E-Posta gönder
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Profile