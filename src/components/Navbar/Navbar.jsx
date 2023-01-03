import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import Logo from "./logo.svg"
import Brand from "./brand.svg"
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthenticationContext } from '../../context/authentication'
import MenuIcon from '@mui/icons-material/Menu';
import { auth } from '../../firebase/firebase.config'
import { KombiList } from '../data/questions'
import { KazanList } from '../data/KazanList'
import { KlimaList } from '../data/KlimaList'
import { addDoc } from 'firebase/firestore'
import { KombiData } from '../data/KombiDataBase'
import { KazanData } from '../data/KazanDataBase'
import { KlimaData } from '../data/KlimaDataBase'
import { CloudContext } from '../../context/cloudContext'
import { PageModal } from '../Modal/PageModal'
import { DogalgazTesisat } from '../data/DogalgazTesisat'


function Navbar({setMainList,mainList,setChanged}) {
  const {user}=useContext(AuthenticationContext)
  const {blogs,questionData}=useContext(CloudContext)
  const [className,setClassName]=useState("wide")
  const [paged,setPaged]=useState(false)
  const Links=[
    {id:"01",label:"Kombi",set:{list:KombiData.questions,mainWish:KombiData.title}},
    {id:"02",label:"Kazan",set:{list:KazanData.questions,mainWish:"Kazan"}},
    {id:"03",label:"Klima",set:{list:KlimaData.questions,mainWish:"Klima"}},
    {id:"04",label:"Doğalgaz Tesisatı",set:{list:DogalgazTesisat.questions,mainWish:"Doğalgaz Tesisatı"}},
  ]
useEffect(()=>{
  setClassName("wide")
},[paged])
  let navigate=useNavigate()
  const [alertMessage,setAlertMessage]=useState({
    infoText:"",
    visible:false,
    isInfo:true,
    isError:false,
    title:"",
    route:"",
    handleFunction:"",
    functionText:"Yine de Devam Et"
  })

  const handleRoute=(i)=>{
    if(!i.link){
      setMainList({list:i.set.list,mainWish:i.set.mainWish})
      navigate("/hizmet-olustur")
      setChanged(pre=>!pre)
    }else{
      navigate(i.to)
    }
  }
  var route=useLocation().pathname






                    
  return (
   
    <nav className={`navbar`}>
      <PageModal
      open={alertMessage.visible}
      state={alertMessage}
      setState={setAlertMessage}
      />
        <div className="navbarWrapper">
            <div className="left">
              <div
              onClick={()=>{
                if(route==="/hizmet-olustur"){
                  setAlertMessage({
                    ...alertMessage,
                    visible:true,
                    title:"Uyarı",
                    infoText:"Yaptığınız Değişikler Kaybolmak Üzere",
                    isInfo:false,
                    isError:false,
                    route:"/hizmet-olustur",
                    handleFunction:()=>navigate("/")
                  })
                }else{
                  navigate("/")
                }
              }}
              className="link">
                <img className='logo' src={Logo} alt="logo"/>
               
              </div>
            </div>
            <div className="center">
            {Links.map(i=>{
                return(
                  <label
                  key={i.id}
                  className={`link ${i.label===mainList.mainWish ? "active":"link"}`}
                  onClick={()=>{
                    if(route==="/hizmet-olustur"){
                      setAlertMessage({
                        ...alertMessage,
                        visible:true,
                        title:"Uyarı",
                        infoText:"Yaptığınız Değişikler Kaybolmak Üzere",
                        isInfo:false,
                        isError:false,
                        route:"/hizmet-olustur",
                        handleFunction:()=>handleRoute(i)
                      })
                    }else{
                      handleRoute(i)
                    }
                   
                  }}
                   >{i.label}</label>
                )
              })}
            </div>
            <div className="right">
            <div
            onClick={()=>setClassName(pre=>pre==="high"?"wide":"high")}
            className="hidden-menu-bar">
              <MenuIcon className='icon'/>
            </div>
            <div className="right-wrapper">
                {user&&!user.isAnonymous?
                <div
                onClick={()=>{
                  setClassName("wide")
                  if(route==="/hizmet-olustur"){
                    setAlertMessage({
                      ...alertMessage,
                      visible:true,
                      title:"Uyarı",
                      infoText:"Yaptığınız Değişikler Kaybolmak Üzere",
                      isInfo:false,
                      isError:false,
                      route:"/hizmet-olustur",
                      handleFunction:()=>navigate("/profil")
                    })
                  }else{
                    navigate("/profil")
                  }
                }}
                className="button logged">{user.displayName?user.displayName:user.email}</div>
                :<div 
                to="/giris-yap" 
                onClick={()=>{
                
                  if(route==="/hizmet-olustur"){
                    setAlertMessage({
                      ...alertMessage,
                      visible:true,
                      title:"Uyarı",
                      infoText:"Yaptığınız Değişikler Kaybolmak Üzere",
                      isInfo:false,
                      isError:false,
                      route:"/hizmet-olustur",
                      handleFunction:()=>navigate("/giris-yap")
                    })
                  }else{
                    navigate("/giris-yap")
                  }
                }}
                
                className="button">GİRİŞ YAP</div>}
                   {!auth?.currentUser|auth.currentUser?.isAnonymous?<a
                    rel='noreferrer'
                    className='button firm'
                    href='http://firma.onlinekesif.com/' target="_blank"
                      >Firma Girişi  
                  </a>:null}
            </div>
           
            </div>
            
        </div> 
        <div className={`hidden-menu ${className}`}>
     
          <div className="links">
          {Links.map(i=>{
                return(
                  <label
                  key={i.id}
                  className={`link ${i.label===mainList.mainWish ? "active":"link"}`}
                  onClick={()=>{
                    if(!i.link){
                      setMainList(i.set)
                      setClassName("wide")
                      navigate("/hizmet-olustur")
                      setChanged(pre=>!pre)
                    }else{
                      navigate(i.to)
                      setClassName("wide")
                    }
                    
                  }}
                   >{i.label}</label>
                )
              })}
              <div className="button-area">
              {user&&!auth.currentUser.isAnonymous?
                <NavLink 
                onClick={()=>setClassName("wide")}
                to="/profil" 
                
                className="button">{user.displayName?user.displayName:user.email}</NavLink>
                :<NavLink 
                onClick={()=>setClassName("wide")}
                to="/giris-yap" className="button">GİRİŞ YAP</NavLink>}
                    <a
                    rel='noreferrer'
                    className='button firm'
                    href='http://firma.onlinekesif.com/' target="_blank"
                    >Firma Girişi
                  </a>
              </div>
              
          </div>
        </div>
        <div className="news-line">
          <p>Online keşif sizlere evinizin konforundan ayrılmak zorunda kalmadan yaptırmak istediğiniz tadilat için en uygun teklifleri almanızı sağlıyor.</p>
        </div>
    </nav>
    
  )
}

export default Navbar
