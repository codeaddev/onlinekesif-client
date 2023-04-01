import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import React,{createContext,useState,useEffect} from 'react'
import { auth, db } from '../firebase/firebase.config'
import { GoogleAuthProvider,getAuth, signInWithPopup, } from "firebase/auth";

export const AuthenticationContext=createContext()

export const AuthenticationProvider=({children})=>{
    const [user,setUser]=useState("")
    const [userData,setUserData]=useState({})
    const [errorLogin,setErrorLogin]=useState("")
    const [loggining,setLogining]=useState(false)
    const [gettingUser,setGettingUser]=useState(false)

    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        
        if(user&&!user.isAnonymous){

          updateDoc(doc(db,"Users",auth.currentUser.uid),{
            isOnline:true,
            lastLogin:new Date()
          })
        }
        
      })
    
      const provider = new GoogleAuthProvider();

      
      const googlelogin=async(e)=>{
        e.preventDefault()

        const subs=await signInWithPopup(auth, provider)
        
        await setDoc(doc(db,"Users",subs.user.uid),{
            userid:subs.user.uid,
            userName:"",
            lastName:"",
            phone:"",
            email:subs.user.email,
            provider:subs.user.operationType,
            city:"",
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
            ZIP:""
    
          }).then(()=>setLogining(false))
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
      
      } 



      const register=async(e,email,pass)=>{
        e.preventDefault();
        const createUser=await createUserWithEmailAndPassword(auth,email,pass)
        await setDoc(doc(db,"Users",createUser.user.uid),{
          userid:createUser.user.uid,
          userName:"",
          lastName:"",
          phone:"",
          email:email,
          provider:createUser.operationType,
          city:"",
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
          ZIP:""

        }).then(setUser(createUser.user))
        .then(getUserData())

      }

      const logout=async(e,go)=>{
        e.preventDefault()
       await updateDoc(doc(db,"Users",auth.currentUser.uid),{
        isOnline:false,
       })
        await signOut(auth)
        .then(()=>setUser(""))
        
        .finally(()=>go("/"))
        
      }

      const getUserData=async()=>{
        setGettingUser(true)
        try{
          const userRef=doc(db,"Users",user.uid)
          const docSnap=await getDoc(userRef)
          if(docSnap.exists())
          {setUserData({...docSnap.data(),userNameAuth:auth.currentUser.displayName})
          setGettingUser(false)
          }
          else{
          
          }  
        }catch(e){
          setGettingUser(false)
          //console.log(e.message)
        }
      }
    
      useEffect(()=>{
        if(user&&!user.isAnonymous){
          getUserData()
          
        }  
      },[user])
      
      
      const login=async(e,mail,pass,navigate)=>{
        e.preventDefault()
    
          try{
            
            await signInWithEmailAndPassword(auth,mail,pass)
            .then((user)=>setUser(user))
            .then(()=>setLogining(false))
            .finally(()=>navigate("/"))
            .catch(e=>{
              alert(e.message)})
            
          }catch(error){
            alert(error.message)
          }
        }
        
      const popuplogin=async(e,mail,pass)=>{
        e.preventDefault()
          try{
            await signInWithEmailAndPassword(auth,mail,pass)
            .then((user)=>setUser(user))
            
            
            
          }catch(error){
            
            alert(error.message)
          }
        }
    return(
        <AuthenticationContext.Provider
        value={{
            Authenticated:!!user,
            logout,
            user,
            setUser,
            userData,
            login,
            register,
            popuplogin,
            googlelogin,
            errorLogin,loggining,
            getUserData,
            gettingUser
        }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}