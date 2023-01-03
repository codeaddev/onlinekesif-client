import { Hidden } from '@mui/material'
import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import EditForm from './EditForm'
import "./myaccount.scss"

function MyAccount() {
  return (
    <div
    className='hesabim'
    >
        
        <div className="hesabim-container">
            <Hidden/>
            <Sidebar/>
            <div className="hesabim-inner-container">
                <EditForm/>
            </div>
        </div>
    </div>
  )
}

export default MyAccount