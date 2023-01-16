import { doc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { Beforeunload } from 'react-beforeunload';
import ReactDOM from 'react-dom/client';

import App from './App';
import LiveChat from './components/liveChat/LiveChat';
import Navbar from './components/Navbar/Navbar';
import { AuthenticationProvider } from './context/authentication';
import { CloudProvider } from './context/cloudContext';
import { auth, db } from './firebase/firebase.config';
import "./index.scss"
import reportWebVitals from './reportWebVitals';


const handleUnload=(e)=>{
  e.preventDefault()
  if(auth.currentUser&&!auth.currentUser.isAnonymous){
    updateDoc(doc(db,"Users",auth.currentUser.uid),{isOnline:false})
  }else {return}
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <CloudProvider>
    
       
          <App />
         
      </CloudProvider>
    </AuthenticationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
