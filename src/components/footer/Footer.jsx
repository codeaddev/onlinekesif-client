import React, { useContext, useState } from 'react'
import "./footer.scss"
import Logo from "../Navbar/logo.svg"
import { CloudContext } from '../../context/cloudContext'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';
import { PageModal } from '../Modal/PageModal'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin ,faFacebook,faTwitter,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons'
import {Container} from 'react-bootstrap'

import applesvg from "./apple.svg";
import googlesvg from "./google.svg";

function Footer({ setMainList, setChanged, mainList }) {
  const { blogs, questionData } = useContext(CloudContext)
  const [alertMessage, setAlertMessage] = useState({
    infoText: "",
    visible: false,
    isInfo: true,
    isError: false,
    title: "",
    route: "",
    handleFunction: "",
    functionText: "Yine de Devam Et"
  })
  let navigate = useNavigate()

  const policyList = [
    { id: "01", label: "KVKK", to: "/KVKK" },
    { id: "02", label: "Gizlilik Ayarları", to: "/KV-saklanmasi-ve-imha" },
    { id: "03", label: "Çerez Politikası", to: "/Web-Sitesi-Gizlilik-Ve-Cerz-Politikasi" },
    { id: "04", label: "Koşullar", to: "/uyelik-sozlesmesi" },
    { id: "05", label: "Site Haritası", to: "/Site-haritasi" },
    //{ id: "06", label: "Tedarikçi Sözleşmesi", to: "/Tagt" },
  ]
  const bottomlinks = [
    { id: "01", label: "Online Keşif", class: "white", to: "/" },
    { id: "02", label: "Hakkımızda", class: "yellow", to: "/hakkimizda" },
    // {id:"03",label:"Hizmetler",class:"yellow",to:"/hizmetler"},
    { id: "04", label: "İletişim", class: "yellow", to: "/iletisim" },
    { id: "05", label: "Yardım", class: "yellow", to: "/yardim-ve-islem-rehberi"}]



  var route = useLocation().pathname

  const handleSituation = (route) => {
    setAlertMessage({
      ...alertMessage,
      visible: true,
      title: "Uyarı",
      infoText: "Yaptığınız Değişikler Kaybolmak Üzere",
      isInfo: false,
      isError: false,
      route: "/hizmet-olustur",
      handleFunction: () => navigate(route)
    })
  }

  const handleRoute = (i) => {
    setMainList({ list: i.questions, mainWish: i.title })
    navigate("hizmet-olustur")
    setChanged(pre => !pre)
    window.scrollTo(0, 0)
  }

  return (
    <footer className='footer'>
      <PageModal
        open={alertMessage.visible}
        state={alertMessage}
        setState={setAlertMessage}
      />
      <div className="top">
        <div className="col one">
          <div className="centered">
            <p className='logo-title'>ONLİNE KEŞİF</p>
            <p>Online keşif sizlere evinizin konforundan ayrılmak zorunda kalmadan yaptırmak istediğiniz tadilat için en uygun teklifleri almanızı sağlıyor.</p>
            <div className="contact-area">
            <div className="link line">
              <EmailIcon />
              <a href="mailto: destek@onlinekesif.com">destek@onlinekesif.com</a>
            </div>
            {/* <div className="link line">
 <WhatsAppIcon/>
 <a href="https://wa.me/905335908916" rel="nofollow" target="_blank">05335908916</a>
 </div> */}
            <div className="link line">
              <LocalPhoneIcon />
              <a href="tel:+908502420573">0850 242 05 73</a>
            </div>
            </div>
            
            <div className="svg">
              <img src={applesvg} alt="apple.store.svg" className='apple' height={50} align="left" />
              <img src={googlesvg} alt="google.play.svg" className='google' height={50} />
            </div>
            
          </div>
        </div>

        <div className="col two">
          <div className="centered center">
            <h3>Hizmetler</h3>
            <div className="buttons">
              {questionData.map(i => {
                return (
                  <div
                    key={i.id}
                    onClick={() => {
                      if (route === "/hizmet-olustur") {
                        setAlertMessage({
                          ...alertMessage,
                          visible: true,
                          title: "Uyarı",
                          infoText: "Yaptığınız Değişikler Kaybolmak Üzere",
                          isInfo: false,
                          isError: false,
                          route: "/hizmet-olustur",
                          handleFunction: () => handleRoute(i)
                        })
                      } else {
                        handleRoute(i)
                      }

                    }}
                    className="button">
                    {i.title}
                  </div>
                )
              })}

            </div>
            {/* <div 
 onClick={()=>{
 if(route==="/hizmet-olustur"){
 handleSituation("/hizmetler")
 }else{
 navigate("/hizmetler")
 window.scrollTo(0,0)
 
 }
 }}
 className="button-red">Daha Fazlası</div> */}
            

          </div>
        </div>


        <div className="col four">
          <div className="centered">
          <h3>Online Keşif</h3>
            <div className="right">
              {bottomlinks.map(i => {
                return (
                  <NavLink
                    key={i.id}
                    className={`link ${i.class}`}
                    to={i.to} >{i.label}</NavLink>
                )
              })}
            </div>

          </div>
        </div>

        <div className="small">
        <div className="inner-small">
        <h3 className='inner-th'>Bizi Takip Edin</h3>
        
          <div className='social-media-icons'>
          <a href="https://www.facebook.com/onlinekesifcom?mibextid=ZbWKwL" target="_blank"
          className='facebook social'> <span>Facebook</span>&nbsp;
             <FontAwesomeIcon icon={faFacebook} /> 
            </a>

            <a href="https://www.instagram.com/onlinekesif/?igshid=MTg0ZDhmNDA%3D" target="_blank"
            className='instagram social'><span>Instagram</span>&nbsp; 
              <FontAwesomeIcon icon={faInstagram} />
            </a>




            <a href="https://www.linkedin.com/company/onlineke%C5%9Fif/" target="_blank"
            className='linkedin social'> <span>Linkedin</span>  &nbsp; &nbsp;
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://twitter.com/onlinekesif?t=cRP8o8VqWu0fEi51JQsP0w&s=08" target="_blank"
           className='twitter social'> <span>Twitter</span>&nbsp; &nbsp; &nbsp; &nbsp;   
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            
            <a href="https://www.youtube.com/channel/UCaEkP0Kt6KOKDfS_IgBgFPQ" target="_blank" className='youtube social'> <span>Youtube</span>  &nbsp; &nbsp; 
              <FontAwesomeIcon icon={faYoutube} />
            </a> 
          </div>
      
       </div>
        </div>
      </div>
      <div className="bottom">

        {/* sağ footerdan buraya iletişim */}
        <div className="col three">
          <div className="right ">
            {policyList.map(i => {
              return (
                <div
                  key={i.id}
                  onClick={() => {
                    if (route === "/hizmet-olustur") {
                      handleSituation(i.to)
                    } else {
                      navigate(i.to)
                      window.scrollTo(0, 0)

                    }
                  }}
                  className="link"
                >{i.label}</div>
              )
            })}

          </div>

        </div>
        <div className="right">Onlinekesif.com bir Online Keşif A.Ş. Kuruluşudur</div>
      </div>
    </footer>
  )
}

export default Footer