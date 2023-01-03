import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./sideLinks.scss"
import User from "./svg/user.svg"
import Circle from "./svg/circle.svg"
import Panel from "./svg/panel.svg"
import Settings from "./svg/settings.svg"
import LogoutIcon from "./svg/logout.svg"
import { auth, db, storage } from '../../firebase/firebase.config'
import EmptyFoto from  "../../components/svg/emptyfoto.svg"
import Plus from  "../../components/svg/plus.svg"
import Down from  "../../components/svg/chevronDown.svg"
import { useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { doc, updateDoc } from 'firebase/firestore'
import { updateProfile } from 'firebase/auth'
import { AuthenticationContext } from '../../context/authentication'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';


function SideLinks() {
    const [file,setFile]=useState("")
    const [uploading,setUploading]=useState(true)
    const {logout}=useContext(AuthenticationContext)
    const Links=[
        {id:"01",label:"Panelim",to:"/profil",icon:Circle},
        {id:"02",label:"Hesabım",to:"/profil/hesabim",icon:User},
        {id:"03",label:"Tekliflerim",to:"/profil/kesiflerim",icon:Circle},
        ]
   
      function handleChange(event) {
        setFile(event.target.files[0]);
    }
   
      const handleSubmit=async(e)=>{
        e.preventDefault();
        setUploading(true)
        let url;
        if(file&&auth.currentUser){
        const imgRef=ref(storage,`logo/${auth.currentUser.uid+file.name}`)
        const snap=await uploadBytes(imgRef,file)
        const dlurl=await getDownloadURL(ref(storage,snap.ref.fullPath))
        url=dlurl;
        await (doc(db,"Users",auth.currentUser.uid),{
            logo:url
        })
        await updateProfile(auth.currentUser,{photoURL:url})
        
        await updateDoc(doc(db,"Users",auth.currentUser.uid),{
            logo:url,
        
        })
        .then(()=>setUploading(false))
        .finally(()=>alert("Fotoğraf başarıyla güncellendi"))
        .catch(e=>
            {setUploading(false)
            alert(e.message)})
        }else{
            alert("Üye girişi yapın veya kayıt olun")
        }
    }
    let navigate=useNavigate()
  return (
    <div className='links'>
        
        <div className="nav-links">
        <div className="img-container">
            <div className="img-center">
                <img src={file?URL.createObjectURL(file):auth.currentUser?.photoURL?auth.currentUser.photoURL:EmptyFoto} alt=""/>
                {!auth.currentUser?.photoURL?
                <label
                name="file"
                
                htmlFor='profile-photo'
                >
                <img
                className='mini'
                src={Plus} alt="" />
                <input
                accept="image/png, image/gif, image/jpeg,image/jpg"
                onChange={handleChange}
                type="file" 
                style={{display:"none"}}
                id='profile-photo'/>
                </label>
                :null}
            </div>
            
        </div>
        {
            Links.map(i=>{
                return(
                    <NavLink
                    className={({ isActive }) =>isActive ? "link active" : "link"}
                    to={i.to}
                    key={i.id}>
                        
                        <img src={i.icon} alt="" className='icon' />
                        {i.label}
                    </NavLink>
                )
            })
        }
        </div>
        
        <button
        onClick={(e)=>logout(e,navigate)}
        >
        <img src={LogoutIcon} alt="" className='icon' />
        Çıkış
        </button>
    </div>
  )
}

export default SideLinks