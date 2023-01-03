import React, { useState } from 'react'
import AnyIcon from '../../deneme/AnyIcon'

const SelectMany = ({
    questionData,
    setQuestionData,
    wishDetail,
    setWishDetail,
    isSelectedinArray,
    selectedItems,
    setSelectedItems,

}) => {

  return (
    <div className='row'>
           
    {questionData.list?.[questionData.current].nest?.map(i=>{
      var lengthofanswers=questionData.list[questionData.current].nest?.length
      return(
        <>
    
        <div 
        key={i.id}
        className={`boxes ${isSelectedinArray(i.id)?"selected":""} ${i.type} ${lengthofanswers>5?"bigdata":"normal"} ` } 
        onClick={()=>{
                    if (isSelectedinArray(i.id)){
                        var newArray=selectedItems.filter(item=>item.id!==i.id)
                        setSelectedItems(newArray)
                    }else{
                        setSelectedItems([...selectedItems,{id:i.id,label:i.q}])
                    } 
                    }
                }
        >
        <p className={`${i.svg?"full":"normal"}`}>{i?.q}</p>
        {i.svg?
        <AnyIcon
        percent={questionData.percent}
        className={"card-icon"}
        child={i.svg}
        />:null}

        {i.type!=="button"?<div className="select-box">{isSelectedinArray(i.id)?"SEÇİLDİ":"SEÇ"}</div>:null}
        </div>
        

  </>      
      )
    })}
    <button 
          onClick={(e)=>{
            e.preventDefault();
            const newPercentArray=[...questionData.percent,questionData.list[questionData.current].nest[0].p]
            setWishDetail({...wishDetail,[questionData.list[questionData.current].id+"."+questionData.list[questionData.current].q]:selectedItems})
            setQuestionData({...questionData,current:questionData.current+1,percent:newPercentArray})
                    
            
          }}
          className='boxes button'>Devam Et</button>
    </div>
  )
}

export default SelectMany