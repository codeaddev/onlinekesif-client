import React from 'react'
import { useState } from 'react'
import "./login.scss"
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup,FacebookAuthProvider, sendEmailVerification, EmailAuthProvider } from "firebase/auth"
import {auth, db} from "../../firebase/firebase.config"
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {AuthenticationContext} from "../../context/authentication"
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/data/text/Header'
import Facebook from "./svg/facebook.svg"
import Apple from "./svg/apple.svg"
import Google from "./svg/google.svg"
import Build from "./svg/build.svg"
import Card from "./svg/card.svg"
import Parabol from "./svg/parabol.svg"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import { Alert } from '@mui/material'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


function Login() {
  const [loginMail,setLoginMail]=useState("")
  const [logPassword,setLogPassword]=useState("")
  const [apploading,setAppLoading]=useState(false)
  const [showPass,setShowPass]=useState("password")
  const [alertMessage,setAlertMessage]=useState("")
  const [forgotPassword,setForgotPassword]=useState(false)
  
  const handleErrorMessage=(err)=>{
    if(err==="Firebase: Error (auth/email-already-exists)."){
      setAlertMessage("Sağlanan e-posta zaten mevcut bir kullanıcı tarafından kullanılıyor. Her kullanıcının benzersiz bir e-posta adresi olmalıdır") 
    }else if(err==="Firebase: Error (auth/id-token-expired)."){
      setAlertMessage("kullanıcı hatırlama süresi doldu.")
    }
    else if(err==="Firebase: Error (auth/internal-error)."){
      setAlertMessage("Kimlik doğrulama sunucusu beklenmeyen bir hatayla karşılaştı. ")
    }
    else if(err==="Firebase: Error (auth/invalid-email)."){
      setAlertMessage("email kullanıcı özelliği için sağlanan değer geçersiz. mail adresi, geçerli e-posta adresi olmalıdır.")
    }else if(err==="Firebase: Error (auth/wrong-password)."){
      setAlertMessage("şifreyi yanlış girdiniz")
    }else if(err==="Firebase: Error (auth/user-not-found)."){
      setAlertMessage("Kullanıcı bulunamadı, kaydolun veya tekrar deneyin")
    }
    else{
      setAlertMessage("Bir hata meydana geldi, tekrar deneyin")
    }

  }
  const login=async(e,mail,pass,navigate)=>{
    e.preventDefault()

      try{
        
        await signInWithEmailAndPassword(auth,mail,pass)
        .then((res)=>updateDoc(doc(db,"Users",res.user.uid),{
          isOnline:true,
          currentDevice:isMobile?"mobile":"desktop",
          lastLogin:new Date()
        }))
        .then(()=>navigate("/"))
        .catch(e=>{
          handleErrorMessage(e.message)})
        
      }catch(error){
        
        handleErrorMessage(error.message)
      }
    }
  const {register,logout,errorLogin,loggining}=useContext(AuthenticationContext)
  let navigate=useNavigate()

  const providerG = new GoogleAuthProvider();
  const providerF = new FacebookAuthProvider();

  const googlelogin=async(e)=>{
    e.preventDefault()

    const subs=await signInWithPopup(auth, providerG)
    
    await setDoc(doc(db,"Users",subs.user.uid),{
        userid:subs.user.uid,
        userName:"",
        lastName:"",
        phone:"",
        email:subs.user.email,
        provider:"google",
        city:"",
        region:"",
        regDevice:isMobile?"mobile":"desktop",
        currentDevice:isMobile?"mobile":"desktop",
        adress:"",
        createdAt:new Date(),
        notification:"",
        virgin:true,
        isOnline:true,
        firm:false,
        client:true,
        logo:"",
        userUnique:new Date().valueOf().toString().substring(6),
        updatedAt:"",
        ZIP:"",
        //new
        orders:0,
        viewedProduct:false,
        viewedBlog:false,
        point:[],
        readenBlogs:[],
        readenProducts:[],
        chatted:false,
        lastLogin:new Date(),
        likes:[],
        comments:[]

      })
      .then(()=>navigate("/"))
  }
  const facebooklogin=async(e)=>{
    e.preventDefault()

    const subs=await signInWithPopup(auth, providerF)
    
    await setDoc(doc(db,"Users",subs.user.uid),{
        userid:subs.user.uid,
        userName:"",
        lastName:"",
        phone:"",
        email:subs.user.email,
        provider:"facebook",
        city:"",
        regDevice:isMobile?"mobile":"desktop",
        currentDevice:isMobile?"mobile":"desktop",
        region:"",
        adress:"",
        createdAt:new Date(),
        notification:"",
        virgin:true,
        isOnline:true,
        firm:false,
        client:true,
        logo:"",
        userUnique:new Date().valueOf().toString().substring(6),
        updatedAt:"",
        ZIP:"",
        //new
        orders:0,
        viewedProduct:false,
        viewedBlog:false,
        point:[],
        readenBlogs:[],
        readenProducts:[],
        chatted:false,
        lastLogin:new Date(),
        likes:[],
        comments:[]

      })
      .then(()=>navigate("/"))
  }


  

  const handleSubmit=(e)=>{
    login(e,loginMail,logPassword,navigate)
  }


  return (
    <div className='login'>
      <div className="form">
        <div className="form-container">
        <div className="left">
          <div className="header">
          <Header>HOŞ GELDİNİZ</Header>
          <div className="underline"></div>
        
          </div>
          <p>Size özel teklif ve hizmetlerimize ulaşabilmeniz için giriş yapabilir , üyeliğiniz yok ise hesap oluşturabilirsiniz.</p>
          <form 
          className='form-inputs'
          onSubmit={handleSubmit}>
              <input
              required
              className='input'
              onChange={(e)=>setLoginMail(e.target.value)}
              placeholder="e-posta"
              value={loginMail}
              />
              <div className="input eye">
                <span className='light'></span>
              <input
              className='eye'
              required
              placeholder="şifre"
              value={logPassword}
              type={showPass}
              onChange={(e)=>setLogPassword(e.target.value)}
              />        
           <div 
                        onClick={()=>setShowPass(pre=>pre==="password"?"text":"password")}
                        className="eye-icon">
                        {showPass==="password"?<RemoveRedEyeIcon
                        />:<VisibilityOffIcon/>}
                        </div>
              </div>
              
              <NavLink to="/sifremi-unuttum" className="forgot-password">Şifremi Unuttum</NavLink>
            <button
            type='submit'
            className='login-button'
            >Giriş Yap</button>
            <div className="or">
              <div className="line"></div>
              <span>veya</span>
              <div className="line"></div>
            </div>
        
        
        </form>
        <div className="social">
          <button 
          onClick={facebooklogin}
          className="facebook">
            <img src={Facebook} alt="facebook-ile-giriş-yap"/>
          </button>
         
          <button 
          onClick={googlelogin}
          className="google">
          <img src={Google} alt="google-ile-giriş-yap"/>
          </button>
        </div>
        {alertMessage&&<div className='alertdiv'>
            <Alert className='alert' severity="error">{alertMessage}</Alert>
            
            {/* <Alert className='alert' severity="warning">This is a warning alert — check it out!</Alert>
            <Alert className='alert' severity="info">This is an info alert — check it out!</Alert>
            <Alert className='alert' severity="success">This is a success alert — check it out!</Alert> */}
          
          </div>}
        <NavLink className="link" to="/kayit-ol">Kayıt Ol</NavLink>
        <a 
        href='https://firma.onlinekesif.com/'
        
        target="_blank"
        className="firm-register">Firma için Hesap Oluştur</a>
        
        
        
        </div>
        <div className="right">
          <h1>Evinizde yapacağınız tadilatı
önce bize anlatın.</h1>
          <div className="bottom">
          <img className='absolute' src={Parabol} alt=""/>
            <img 
            className='build'
            src={Build} alt=""/>
            
          </div> 
        </div>

        </div>
      </div>
    </div>
  )
}

export default Login