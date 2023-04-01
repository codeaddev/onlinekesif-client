import React, { useContext, useState } from 'react'
import BackChevron from "../../../components/svg/chevronBack.svg"
import Select from 'react-select'
import { Regions } from '../../data/general'
import { AuthenticationContext } from '../../../context/authentication'
import { auth } from '../../../firebase/firebase.config'
import Districts from 'turkey-neighbourhoods/data/extra/districts_by_city.json'
import Neighbourhood from 'turkey-neighbourhoods/data/extra/neighbourhoods_by_district_and_city.json'
import { BursaDistricts, BursaNeighbourhoods,Bursa } from '../../data/bursa/ditricts'
import { CircularProgress } from '@mui/material'

const EndForm = ({
    questionData,
    setQuestionData,
    mainList,
    setEndForm,
    wishDetail,
    setWishDetail,
    ekstra,
    basicInfo,
    setBasicInfo,
    //setRegions,
    //regions,
    handleSubmitDirect,
    handleSubmitWithLogin,
    handleSubmitWithReg,
    //willReg,
    //setWillReg,
    popUpLoginMail,
    popUpLoginPass,
    popUpRegMail,
    popUpRegPass,
    setPopUpLoginMail,
    setPopUpLoginPass,
    setPopUpRegMail,
    setPopUpRegPass,
    userData,user

}) => {

  const {gettingUser}=useContext(AuthenticationContext)
    
    const [willReg,setWillReg]=useState(true)

  const [regions,setRegions]=useState([])
  const [mahalles,setMahalles]=useState([])

  const isDisable=()=>{
    if(!basicInfo.name||!basicInfo.phone||!basicInfo.city||!basicInfo.region||basicInfo.adress){
      return true
    }else{
      return false
    }
  }
  var BursaDistrictsList = [];
  BursaDistricts.forEach(function(element) {
    BursaDistrictsList.push({ label:element, value: element })
});
  var MahalleList = [];
  mahalles.forEach(function(element) {
    MahalleList.push({ label:element, value: element })
});
  

  
  return (
    <div className='last-page'>
        
        <h4>Son birkaç bilgiye ihtiyacımız var</h4>
       {gettingUser?<CircularProgress/>: <div className='input-area'>
          <div className="top">
          <textarea
                  placeholder='Eklemek ve belirtmek istediğiniz başka birşey varsa..'
                  onChange={(e)=>{
                    setWishDetail({...wishDetail,[ekstra]:{id:"1111",q:ekstra,a:e.target.value}})}}
                  value={wishDetail[ekstra]?.a} 
                  name='detail'
                  type="text"/>
            <div className="select-area">
              <input
                  className='input'
                  placeholder='İsim Soyisim'
                  value={basicInfo.name} 
                  name='name'
                  onChange={(e)=>{
                   
                      setBasicInfo({...basicInfo,name:e.target.value})
                 
                    }
                  }
                  type="text" />
                  
              <input
                  className='input'
                  placeholder='Telefon Numarası'
                  value={basicInfo.phone}
                  onChange={(e)=>setBasicInfo({...basicInfo,phone:e.target.value})}
                  name='phone'
                  type="phone" />

            </div>
              
                <div className='select-area'>
                  <Select
                            className='select'
                            placeholder="İl"
                            options={Bursa}
                            defaultInputValue="Bursa"
                            defaultValue="Bursa"
                    />
                  <Select
                            className='select'
                            placeholder="İlçe"
                            options={BursaDistrictsList}
                            onChange={(e)=>{
                                setMahalles(BursaNeighbourhoods[e.label])
                                setBasicInfo({...basicInfo,region:e.label||""})
                                  
                              }}
                  />
                  <Select
                            className='select'
                            placeholder="Mahalle"
                            options={MahalleList}
                            onChange={(e)=>{
                                setBasicInfo({...basicInfo,neighbourhood:e.label||""})}}
                  />
                </div>
                <textarea
                  
                  placeholder='Adres'
                  onChange={(e)=>setBasicInfo({...basicInfo,adress:e.target.value})}
                  value={basicInfo.adress} 
                  name='address'
                  type="text"/>
          </div>
          <div className="bottom">
          {user&&!auth.currentUser.isAnonymous?<button
          className='send-button'
            onClick={handleSubmitDirect}
          >Gönder</button>
          :
          <>
            <div className='auth-type-area'>
        
            <label 
                className={`auth-type-button ${willReg?`pos`:`neg`}`}
                htmlFor="reg">
                <input 
                type="radio" 
                id="reg" 
                name="radio" 
                value="Kayıt Ol"
                style={{display:"none"}}
                onChange={()=>setWillReg(true)}      
                />
               Kayıt Ol
            </label>
                <div className={`auth-type-button hidden ${willReg?`left`:`right`}`}></div>
                <label 
                className={`auth-type-button ${!willReg?`pos`:`neg`}`}
                htmlFor="login">
                <input 
                type="radio" 
                id="login" 
                name="radio" 
                style={{display:"none"}}
                value="Giriş Yap"
                onChange={()=>setWillReg(false)}
                />
                Giriş Yap</label>
          </div>

          <div className='loginputs'>
          {willReg?
  
                <>
                <input className='input'
                          placeholder='e-posta'
                          value={popUpRegMail}
                          name='email'
                          onChange={(e)=>{setPopUpRegMail(e.target.value)
                          setBasicInfo({...basicInfo,email:e.target.value})
                          }}
                          type="email" />
                
                  <input
                          className='input'
                          placeholder='şifre'
                          value={popUpRegPass}
                          onChange={(e)=>setPopUpRegPass(e.target.value)}
                          name='email'
                          type="password" />
                  {/* <input
                          className='input'
                          placeholder='şifre tekrar'
                          value={popUpRegPassCon}
                          name='password'
                          type="email" /> */}
                          <button
                            //disabled={isDisable()}
                            onClick={handleSubmitWithReg}>Kaydol ve Teklif Al</button>

                </>
                :<>
                <input className='input'
                          placeholder='e-posta'
                          value={popUpLoginMail}
                          name='email'
                          onChange={(e)=>setPopUpLoginMail(e.target.value)}
                          type="email" />
                
                  <input
                          className='input'
                          placeholder='şifre'
                          value={popUpLoginPass}
                          onChange={(e)=>setPopUpLoginPass(e.target.value)}
                          name='password'
                          type="password" />
                          <button
                            onClick={handleSubmitWithLogin}>Giriş Yap ve Teklif Al</button>
                </>

                }
            </div>

          </>
          
          }

          </div>
         
          
        </div>}
        
        
        
        
        <button
          className='back-button'
          onClick={(e)=>{
            e.preventDefault();
            var newPercent=questionData.percent.slice(0,questionData.percent.length-1)
            setQuestionData({...questionData,
              list:mainList.list,
              current:questionData.list.length-1,
              percent:newPercent,})
            setEndForm(false)
            
            }
          }
          >
            <img src={BackChevron} alt="" />
          </button>
        </div>
  )
}

export default EndForm