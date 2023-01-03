import React from 'react'
import ColumnItem from './ColumnItem'
import MiniPlus from "../../../components/data/svgQue/miniPlus.svg"
import { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import Typography from '@mui/material/Typography';
import { KazanList } from '../../../components/data/KazanList';
import { KombiList } from '../../../components/data/questions';
import { KlimaList } from '../../../components/data/KlimaList';
import { NavLink, useNavigate } from 'react-router-dom';

function Column({item,setMainList}) {
  const [open, setOpen]=useState(false)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
  };
  const stylein = {
   
    display:"flex",
    bgcolor: 'background.paper',
    p: 4,
    gap:1,
   
    
  };
  const styleone = {
    border: '2px solid #000',
    display:"flex",
    bgcolor: 'background.paper',
    p: 4,
    cursor:"pointer",

    
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const MainCom=[
    {id:"1",label:"Kombi",array:KombiList},
    {id:"2",label:"Kazan",array:KazanList},
    {id:"1",label:"Klima",array:KlimaList}
  ]
  let navigate=useNavigate()
  return (
    
    <div className='col'>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        
      >
        <Fade in={open}>
          <Box 
          
          sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Servis İhtiyacınız Hangisi
            </Typography>
          
          <Box
          sx={stylein}
          >
          {MainCom.map(i=>{
              return(
                <Box
                
                onClick={()=>{setMainList({list:i.array,mainWish:i.label})
                navigate("/hizmet-olustur")
              }}
                sx={styleone}
                key={i.id}>
                  {i.label}
                </Box>
              )
            })}
          
          </Box>
          
            
          </Box>
        </Fade>
      </Modal>
      <NavLink to="kesiflerim" 
      className="header-bar">
      {item.headBar}
      </NavLink>
    
    {item.data&&item.data.length>0?
    item.data.map(i=>{
      return(
        <ColumnItem 
        key={i.id}
        item={i} />
      )
    })
    :<p className='empty-text'>{item.emptyMessage}</p>
  }

    {item.add&&item.data.length<3?
    <div
    onClick={handleOpen}
    className='empty-box'
    ><img src={MiniPlus} alt="" />
      Yeni Keşif Talebi Oluştur</div>
    :null  
  }

    </div>
  )
}

export default Column