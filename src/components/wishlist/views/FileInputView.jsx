import React, { useState } from "react";
import Attach from "../../liveChat/attachment.svg";
const FileInputView = ({
  inputRef,
  questionData,
  text,
  setWishDetail,
  wishDetail,
  setText,
  setFile,
}) => {
  return (
    <div className="row input">
      <textarea
        type="text"
        autoFocus
        ref={inputRef}
        className="file-input"
        placeholder={
          questionData.list[questionData.current].placeHolder
            ? questionData.list[questionData.current].placeHolder
            : "buraya yazın"
        }
        required={questionData.list[questionData.current].required}
        name={questionData.list[questionData.current].q}
        value={text}
        //value={wishDetail[questionData.list[questionData.current].q]}
        onChange={(e) => {
          setWishDetail({
            ...wishDetail,
            [questionData.list[questionData.current].id]: {
              id: questionData.list[questionData.current].id,
              q: questionData.list[questionData.current].q,
              a: e.target.value,
            },
          });
          setText(e.target.value);
        }}
      />
      <label htmlFor="file">
        <img src={Attach} alt="" />
      </label>

      <input
        type="file"
        autoFocus
        id="file"
        ref={inputRef}
        style={{ display: "none" }}
        className="file-input"
        placeholder={
          questionData.list[questionData.current].placeHolder
            ? questionData.list[questionData.current].placeHolder
            : "buraya yazın"
        }
        //required={questionData.list[questionData.current].required}
        name={questionData.list[questionData.current].q}
        //value={text}
        //value={wishDetail[questionData.list[questionData.current].q]}
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
    </div>
  );
};

export default FileInputView;
