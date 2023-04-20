import React from "react";
import { useNavigate } from "react-router-dom";
import BackChevron from "../../../components/svg/chevronBack.svg";
const BackButtonNew = ({ setQuestion, indexArray, setChanged }) => {
  let navigate = useNavigate();

  return (
    <button
      className="back-button"
      onClick={(e) => {
        if (indexArray.length === 0) {
          navigate("/");
        } else {
          e.preventDefault();
          setQuestion(indexArray[indexArray.length - 1]);
          setChanged((pre) => !pre);
        }
      }}
    >
      <img src={BackChevron} alt="" />
    </button>
  );
};

export default BackButtonNew;
