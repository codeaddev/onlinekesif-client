import { Hidden } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

function Settings() {
  return (
    <div
    className='kesiflerim'
    >
        <Navbar/>
        <div className="kesiflerim-container">
            <Hidden/>
            <Sidebar/>
            <div className="kesiflerim-inner-container">
                
            </div>
        </div>
    </div>
  )
}

export default Settings