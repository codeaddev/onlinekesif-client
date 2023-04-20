import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./modal.scss";
import { useNavigate } from "react-router-dom";

export const PageModal = ({ open, state, setState }) => {
  const buttonArea = {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    bgcolor: "background.paper",
    p: 0,
  };
  let navigate = useNavigate();
  const handleClose = () => {
    navigate(state.route);
    setState({ ...state, visible: false });
  };
  const handleCloseWithout = () => {
    setState({ ...state, visible: false });
  };

  const handleFunctionAll = (e) => {
    setState({ ...state, visible: false });
    state.handleFunction(e, state);
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
        <p className="title">{state.title}</p>
        <p className="infoText">{state.infoText}</p>
        {state.isInfo ? (
          <div sx={buttonArea}>
            <Button onClick={handleClose}>Tamam</Button>
          </div>
        ) : (
          <div className="button-area">
            <button className="cancel" onClick={handleCloseWithout}>
              Vazgeç
            </button>
            <button className="go" onClick={handleFunctionAll}>
              {state.functionText}
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};
