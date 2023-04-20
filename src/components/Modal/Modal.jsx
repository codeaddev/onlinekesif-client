import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import "./modal.scss";
import { useNavigate } from "react-router-dom";

export const AppModal = ({
  open,
  setOpen,
  isInfo,
  title,
  infoText,
  handleFunction,
  functionText,
  route,
  state,
  alertstate,
}) => {
  let navigate = useNavigate();
  const handleClose = () => {
    navigate(route);
    setOpen({ ...alertstate, visible: false });
  };
  const handleCloseWithout = () => {
    setOpen({ ...alertstate, visible: false });
  };

  const handleFunctionAll = (e) => {
    setOpen({ ...alertstate, visible: false });
    handleFunction(e, state);
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
      <div className="modal-size app">
        <p className="title">{title}</p>
        <p className="infoText">{infoText}</p>

        {isInfo ? (
          <div className="button-area one">
            <button className="go" onClick={handleClose}>
              Tamam
            </button>
          </div>
        ) : (
          <div className="button-area">
            <button className="cancel" onClick={handleCloseWithout}>
              Vazgeç
            </button>
            <button className="go" onClick={handleFunctionAll}>
              {functionText}
            </button>
          </div>
        )}
        {/* <Fade 
        className='fade'
        in={open}>
          <Box 
          className='box'
          sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {infoText}
            </Typography>
            {isInfo?
            <Box sx={buttonArea}>
            <Button 
            onClick={handleClose}>Tamam</Button>
            </Box>
            :<div
            className='button-area'>
                <Button 
                sx={button}
                onClick={handleCloseWithout}>Vazgeç</Button>
                <Button 
                sx={button}
                onClick={handleFunctionAll}>{functionText}</Button>
            </div>
            }
          </Box>
        </Fade> */}
      </div>
    </Modal>
  );
};
