import React from 'react'

const InputViewNew = ({
    inputRef,
    question,
    text,
    setWishDetail,
    wishDetail,
    mainList,
    setText

}) => {
  return (
    <div className="row">
    <input 
    type="text"
    autoFocus
    ref={inputRef}
    className='input'
    placeholder={mainList.list[question].placeHolder?mainList.list[question].placeHolder:"buraya yazın"}
    name={mainList.list[question].q}
    value={text}
    //value={wishDetail[questionData.list[questionData.current].q]}
    onChange={(e)=>{setWishDetail({...wishDetail,[mainList.list[question].id]:{id:mainList.list[question].id,q:mainList.list[question].q, a:e.target.value}})
    setText(e.target.value)
  }}
    />
    <div className='row'>
   
   
   </div>
  </div>
  )
}

export default InputViewNew