import React from 'react'
import { NavLink } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ViewListIcon from '@mui/icons-material/ViewList';

function ProfileHeaderBar() {

    const crumbs=[
        {id:"01",label:"Panelim",route:"/profil",icon:<DashboardIcon/>},
        {id:"01",label:"Hesabım",route:"/profil/hesabim",icon:<ManageAccountsIcon/>},
        {id:"01",label:"Tekliflerim",route:"/profil/kesiflerim",icon:<ViewListIcon/>},
    ]
  return (
    <div
    className="top-header-bar"
    >
        {crumbs.map(i=>{return(
            <NavLink 
            className="top-header-bar-item"
            to={i.route}>
                {i.icon}
                {i.label}
            </NavLink>
        )})}
    </div>
  )
}

export default ProfileHeaderBar