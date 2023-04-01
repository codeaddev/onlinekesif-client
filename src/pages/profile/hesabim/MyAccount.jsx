import { Hidden } from '@mui/material'
import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import BreadCrumb from '../BreadCrumb'
import EditForm from './EditForm'
import "./myaccount.scss"

function MyAccount() {
  const pages=[
    {id:"01",label:"Profil",route:"/profil",link:true,after:true},
    {id:"02",label:"Hesabım",route:"/profil/hesabim",link:true},
  ]
  return (
    <div
    className='hesabim'
    >
        
        <div className="hesabim-container">
            <Hidden/>
            <Sidebar/>
            <div className="hesabim-inner-container">
              <BreadCrumb pages={pages} />

                <EditForm/>
            </div>
        </div>
    </div>
  )
}

export default MyAccount