import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./modal.scss"
import { useNavigate } from 'react-router-dom';



export const PageModal=({
    open,
    state,
    setState,

    
})=>{
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: `4px solid ${state.isError?"red":"#F9D641"}`,
    borderRadius:5,
    boxShadow: 24,
    p: 4,
    boxSizing:"border-box"
  };
  const buttonArea = {
    boxSizing:"border-box",
    width: "100%",
    display:"flex",
    alignItems:"flex-end",
    bgcolor: 'background.paper',
    p: 0,
  };
  let navigate=useNavigate()
  const handleClose = () => {
    navigate(state.route)
    setState({...state,visible:false})};
  const handleCloseWithout = () => {
    
    setState({...state,visible:false})};

  const handleFunctionAll=(e)=>{
    setState({...state,visible:false})
    state.handleFunction(e,state)
  };
  

  return (

    
      <Modal
        className="area"
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
        <div className="modal-size">
          <p className='title'>{state.title}</p>
          <p className='infoText'>{state.infoText}</p>
          {state.isInfo?
            <div sx={buttonArea}>
            <Button 
            onClick={handleClose}>Tamam</Button>
            </div>
            :<div
            className='button-area'>
                <button  className='cancel' onClick={handleCloseWithout}>Vazgeç</button>
                <button className='go' onClick={handleFunctionAll}>{state.functionText}</button>
            </div>
            }
        
        </div>
      </Modal>
     
    
  );
}