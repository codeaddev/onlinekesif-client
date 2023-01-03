import React from 'react'
import "./columns.scss"
import Clock from "../../../components/data/svgQue/clock.svg"
import Moment from 'react-moment';
import trLocale from 'moment/locale/tr';
import { useNavigate } from 'react-router-dom';

function ColumnItem({item}) {
var moment=require("react-moment")



var navigate=useNavigate()
  return (
    <div 
    onClick={()=>navigate("kesiflerim")}
    className='col-item'>
      <div className="col-top">
        <div className="col-top-top">
          <p>{item.wishDetail.MeskenTipi.a}-{item?.adress?.substring(0,15)}{item?.adress?.length>15?"...":null}</p>
          <div className='col-wish-indicator'>{item?.mainWish}</div>
        </div>
        <div className="col-top-bottom">
          <p className='summary'>{item?.wishDetail.summary?.a}</p></div>
      </div>
      <div className="col-bottom">
        <div className="col-bottom-left">
          {item.Offers.length===0?
          <span>Henüz Teklif Yapılmadı</span>
          : item.Offers.length+" Adet Teklif"
        }
        </div>
        <div className="col-bottom-right">
          <img src={Clock} alt="" />
          <Moment
          className='moment'
          to={new Date(item?.publishRemaining.seconds*1000)}>{new Date()}</Moment>
          </div>
      </div>
    </div>
  )
}

export default ColumnItem