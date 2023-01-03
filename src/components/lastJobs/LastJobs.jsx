import React from 'react'
import MiniExplain from '../sectionHeaders/MiniExplain'
import SectionHeader from '../sectionHeaders/SectionHeader'
import Slider from "react-slick"; 
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Kombi from "./kombi.svg"
import Klima from "./klima.svg"
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';
import { useContext } from 'react';
import { CloudContext } from '../../context/cloudContext';

const LastJobs = () => {

  const {completedJobs}=useContext(CloudContext)
  const  list=[
    {id:"01",label:"Doğalgaz Projesi",detail:"Evimde Kombi Yok Yaptırmak İstyoryum",price:"24000",currency:"₺"},
    {id:"02",label:"Kombi",detail:"Evimde Kombi Var Yenisini Yaptırmak İstyoryum",price:"12000",currency:"₺"},
    {id:"03",label:"Klima",detail:"Yeni Klima İstiyorum",price:"14000",currency:"₺"},
    {id:"04",label:"Kazan",detail:"Site Yerleşkesine Kazan Sistemi İstiyorum",price:"44000",currency:"₺"},
    
  ]
  const settings = {
    dots: true,
    className:"slider job-slider",
    
    //infinite: true,
    centerMode: true,
    slidesToShow:1,
    slidesToScroll: 1,
    variableWidth: true
    
  };
  const handle=async(e)=>{
    e.preventDefault();
    for(let i=0;i<list.length;i++){
      addDoc(collection(db,"completedJobs"),list[i])
    }
    
  }
  var data=completedJobs.length<1?list:completedJobs
  return (
    <div className="section last-jobs">
        <SectionHeader>Son 24 Saatte <strong>Yapılan İşler</strong></SectionHeader>
        <MiniExplain>Online Keşif ekibimizin son 24 saatte sunduğu hizmetler</MiniExplain>

        
       <div style={{width:"100%"}} >

        <Slider {...settings}>
        {data?.map(i=>{
          return(
            <div
            key={i.id}
            style={{
             
            width:400}}
            className={`slider-item`}
            ><div className={`item ${i.label}`}>
              <label>{i.label}</label>
              <p>{i.detail}</p>
              <label>ücret : {i.price} {i.currency}</label>

            </div>
              </div>
          )
        })}
          
        </Slider>
        </div>

    </div>
  )
}

export default LastJobs