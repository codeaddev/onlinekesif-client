import React from 'react'

const InputView = ({
    inputRef,
    questionData,
    text,
    setWishDetail,
    wishDetail,
    setText

}) => {
  return (
    <div className='row'>
    <input 
    type="text"
    autoFocus
    ref={inputRef}
    className='input'
    placeholder={questionData.list[questionData.current].placeHolder?questionData.list[questionData.current].placeHolder:"buraya yazın"}
    required={questionData.list[questionData.current].required}
    name={questionData.list[questionData.current].q}
    value={text}
    //value={wishDetail[questionData.list[questionData.current].q]}
    onChange={(e)=>{setWishDetail({...wishDetail,[questionData.list[questionData.current].id]:{id:questionData.list[questionData.current].id,q:questionData.list[questionData.current].q, a:e.target.value}})
    setText(e.target.value)
  }}
    />

  </div>
  )
}

export default InputView