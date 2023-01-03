import React from 'react'
import AnyIcon from '../../deneme/AnyIcon'

const BoxViewNew = ({
    onClick,
    isSelected,
    item,
    questionData,
    lengthofanswers
}) => {
  const handleView=(item)=>{
    if(item.class&&item.class==="col"){
      var newArray=item.q?.split(" ")
      return(
        <>
        {newArray.map((i,index)=>{
          return (
            <p 
            key={i+index}
            className={`${item.svg?"full":"normal"} ${index===0?"red":null}`}>{i}</p>
          )
        })}
        </>
      )
    }
    else{
      return(
        <p className={`${item.svg?"full":"normal"} ${item.q?.length<4?"big":"null"}`}>{item.q?item.q:null}</p>
      )
    }
  }
  
  return (
    <div className={`boxes ${isSelected(item.id)} ${item.type?item.type:null} ${lengthofanswers>5?"bigdata":"normal"} `}
              
              onClick={()=>onClick(item)}
              >
              {handleView(item)}
              {/* <p className={`${item.svg?"full":"normal"}`}>{item.q}</p> */}
              {item.svg?
              <AnyIcon
              percent={item.percent}
              
              className={"card-icon"}
              child={item.svg}
              />:null}

              {item.type!=="button"?<div className="select-box">{isSelected(item.id)?"SEÇİLDİ":"SEÇ"}</div>:null}
              </div>
  )
}

export default BoxViewNew