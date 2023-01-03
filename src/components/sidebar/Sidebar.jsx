import React from 'react'
import SideLinks from '../sidelinks/SideLinks'
import "./sidebar.scss"
import { auth } from '../../firebase/firebase.config'
import EmptyFoto from  "../../components/svg/emptyfoto.svg"
import Plus from  "../../components/svg/plus.svg"
import Down from  "../../components/svg/chevronDown.svg"


function Sidebar() {


    return (
    <div className='sidebar'>
        <SideLinks/>
    </div>
  )
}

export default Sidebar