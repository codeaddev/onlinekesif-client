import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Navbar from "./components/Navbar/Navbar";

import React,{useContext, useEffect, useRef, useState} from 'react';
import WishListAlt from "./components/wishlist/WishListAlt";

import Profile from "./pages/profile/Profile";
import Kesiflerim from "./pages/profile/kesiflerim/Kesiflerim";
import KesifSingle from "./pages/profile/kesiflerim/KesifSingle";
import MyAccount from "./pages/profile/hesabim/MyAccount";
import Settings from "./pages/settings/Settings";
import { AuthenticationContext } from "./context/authentication";
import Register from "./pages/register/Register";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebase/firebase.config";
import LiveChat from "./components/liveChat/LiveChat";
import ForgotPassword from "./pages/forgot/ForgotPassword";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";
import SingleProduct from "./pages/products/SingleProduct";
import Footer from "./components/footer/Footer";
import Blog from "./pages/blog/Blog";
import BlogSingle from "./pages/blog/BlogSingle";
import Kvkk from "./pages/kvkk/Kvkk";
import Sitemap from "./pages/sitemap/Sitemap";
import { ColorLensOutlined, Policy } from "@mui/icons-material";
import Guidance from "./pages/guidance/Guidance";
import About from "./pages/about/About";
import Contact from "./pages/iletisim/Contact";
import KvkkPage from "./pages/import/kvkkoguz/KvkkPage";
import KvsiPage from "./pages/import/kisisel-veri-saklama-ve-imha-politikasi/KvsiPage";
import WsgzpPage from "./pages/import/web-sitesi-gizlilik-ve-cerez-politikası/Wsgzp";
import { CloudContext } from "./context/cloudContext";
import WishListNew from "./components/wishlist/WishListNew";
import CookieConsent from "react-cookie-consent" ;
import { hover } from "@testing-library/user-event/dist/hover";
import { color, style } from "@mui/system";
import {FaArrowUp} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Kosullar from "./pages/kosullar/Kosullar";
import TagtPage from "./pages/import/tedarikci-aydınlatma-ve-gizlilik-taahhutnamesi/Tagt";
import Payment from "./pages/payment/Payment";


function App() {
  const delay = 5;
  const [successMessage,setSuccessMessage]=useState("")
  const [errorMessage,setErrorMessage]=useState("")
  const [mainList,setMainList]=useState({})
  const [show, setShow] = useState(false);
const [changed,setChanged]=useState(false)
const {notification}=useContext(CloudContext)
//scroll to top start
const [showButton, setShowButton] = useState(true);
  const onScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("bar").style.width = `${percentage}%`;

    // Scroll to top button logic
    //window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    pixelsFromTop > 100 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  //Fineshed ScroolTop


useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 1000);
        return () => {
        clearTimeout(timer1);
      };
    },
  )
  const {user}=useContext(AuthenticationContext)

  document.addEventListener("visibilitychange", () => {
    if(auth.currentUser&&!auth.currentUser.isAnonymous){
      if (document.visibilityState === 'visible') {
        updateDoc(doc(db,"Users",auth.currentUser.uid),{isOnline:true})
      } else {
        updateDoc(doc(db,"Users",auth.currentUser.uid),{isOnline:false});
      }
    }
    
  });
 

  return (
    <BrowserRouter> 
 
    <Navbar
    setMainList={setMainList}
    mainList={mainList}
    setChanged={setChanged}
    />
    {show?<LiveChat/>:null}
    <Routes>
      <Route path="KVKK" element={<KvkkPage/>} />
      <Route path="odeme" element={<Payment/>} />
      <Route path="KV-saklanmasi-ve-imha" element={<KvsiPage/>} />
      <Route path="uyelik-sozlesmesi" element={<Kosullar/>} />
      <Route path="Web-Sitesi-Gizlilik-Ve-Cerz-Politikasi" element={<WsgzpPage/>} />
      <Route path="site-haritasi" element={<Sitemap 
        mainList={mainList}
        changed={changed}
        setMainList={setMainList}
        setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage}
        setChanged = {setChanged}
      />} />
      <Route path="Tagt" element={<TagtPage/>} />
      <Route path="sozlesme-ve-kurallar" element={<Policy/>} />
      <Route path="yardim-ve-islem-rehberi" element={<Guidance/>} />
      <Route path="hakkimizda" element={<About/>} />
      <Route path="iletisim" element={<Contact/>} />
      <Route path="urunler">
        <Route index element={<Products/>}/>
        <Route path=":productId" element={<SingleProduct/>}/>
        {/* <Route path=":productId" element={<SingleProductAlt/>}/> */}
      </Route>
      <Route path="blog">
          <Route index element={<Blog/>}/>
          <Route path=":blogId" element={<BlogSingle/>}/>
      </Route>
      <Route path="hizmetler" element={<Services
      setMainList={setMainList}
      mainList={mainList}
      />}/>     
      <Route path="/">
        <Route index element={<Home
        setMainList={setMainList}
       
        mainList={mainList}
         setErrorMessage={setErrorMessage}
         errorMessage={errorMessage}
         successMessage={successMessage}
         setSuccessMessage={setSuccessMessage}
        />}/>
        
        <Route path={`hizmet-olustur`} element={<WishListAlt 
        mainList={mainList}
        changed={changed}
        setMainList={setMainList}
        setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage}/>}/>
        <Route path={`hizmet-olustur/Doğalgaz`} element={<WishListNew
        mainList={mainList}
        changed={changed}
        setMainList={setMainList}
        setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage}/>}/>
       
        

        {!!user&&!user.isAnonymous?<Route path="profil">
          <Route index element={<Profile 
          setMainList={setMainList}
          />}/>
          <Route path="hesabim" element={<MyAccount/>} />
          <Route path="ayarlar" element={<Settings/>} />
          <Route path="kesiflerim">
              <Route index element={<Kesiflerim 
              setMainList={setMainList}
              />}/>
              <Route path=":servisId" element={<KesifSingle/>}/>
          </Route>
          
          
          <Route path="servis-olustur" element={<New/>}/>
        </Route>
        :<>
        <Route path="giris-yap" element={<Login/>}/>
        <Route path="kayit-ol" element={<Register/>}/>
        <Route path="sifremi-unuttum" element={<ForgotPassword/>}/>
        </>
        }
        <Route path="servislerim">
          <Route index element={<List/>}/>
          <Route path=":servisId" element={<Single/>}/>
          <Route path="servis-olustur" element={<New/>}/>
        </Route>
      </Route>
    </Routes>
    <Footer
    mainList={mainList}
    setChanged={setChanged}
    setMainList={setMainList}/>
 
<div className="page">
      <div className="progress_wrapper">
        <div className="progress_bar" id="bar"></div>
      </div>
      <FaArrowUp 
        className={showButton ? "showButton" : "hidden"}
        onClick={scrollToTop}
      />
    </div>
  
   <CookieConsent
      //debug={true}
      location="bottom"
       style={{ background:"#000", fontSize:"100%", alignItems:"center"}}
       buttonStyle={{ backroundColor:"#303030", fontSize: "20px"}}
       buttonText="Kabul Et"
       expires={150}    
   >  
   Sitemizdeki deneyiminizi iyileştirmek için çerezleri kullanıyoruz. 
   Sitemizin doğru çalışmasını sağlamak, sosyal medya özelliklerini sunabilmek, site trafiğimizi analiz etmek, 
   reklamları ve içerikleri kişiselleştirmek için &nbsp;<a href="https://onlinekesif.com/Web-Sitesi-Gizlilik-Ve-Cerz-Politikasi">
   Çerez Politikası'ndan </a>&nbsp; yararlanıyoruz. 
   Aynı zamanda site kullanımınızla ilgili bilgileri; reklamcılık, sosyal medya ve analiz ortaklarımızla paylaşıyoruz.
   </CookieConsent>  
  </BrowserRouter>
 
  );
}

export default App;
