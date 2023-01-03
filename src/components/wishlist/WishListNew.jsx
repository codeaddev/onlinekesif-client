import React, { useEffect, useRef, useState } from 'react'
import ProcessBar from '../processBar/ProcessBar'
import BackButton from './views/BackButton'
import BackButtonNew from './views/BackButtonNew'
import BoxView from './views/BoxView'
import BoxViewNew from './views/BoxViewNew'
import InputView from './views/InputView'
import InputViewNew from './views/InputViewNew'
import Question from './views/Question'
import QuestionNew from './views/QuestionNew'
import SelectBox from './views/Select'
import SelectMany from './views/SelectMany'
import Svg from "../svg/emptyfoto.svg"
const WishListNew = ({
  
    mainList,
    setMainList,
    changed,
    questionData,
    wishDetail,
    setWishDetail,
    setQuestionData,
    setEndForm,
    isSelectedinArray,
    selectedItems,
    setSelectedItems,
    endForm,
    percentArray,
    setPercentArray
  
  }) => {
    const [question,setQuestion]=useState(0)
    const [text,setText]=useState("")
    const [secondArray,setSecondArray]=useState([])
    const [thirdArray,setThirdArray]=useState([])
    const [indexArray,setIndexArray]=useState([])
    //const [percent,setPercent]=useState([])
    const [changedArray,setChangedArray]=useState(false)

    var inputRef=useRef()
      const onClick=(i)=>{
        var Question=mainList.list?.[question]
        setIndexArray([...indexArray,Question.index])
        setPercentArray([...percentArray,i.p])
        if(i.endForm){
          setEndForm(true)
        }else{
          if(i.type==="button"){
            setQuestion(i.next)
            setText("")
          }else{
            setQuestion(i.next)
            setWishDetail({...wishDetail,[Question.qTitle?Question.qTitle:Question.id]:Question.subq?{id:i.id,q:Question.subq,a:i.q}:{id:i.id,q:Question.q,a:i.q,}})
          }
          
        }
        
        
      }
      const isSelected=(item)=>{
        var array=Object.values(wishDetail).filter(i=>i.id===item)
        if(array.length>0){
          return "selected"
        }
      }
      useEffect(()=>{
        percentArray.pop()
        indexArray.pop()
        
        
        },[changedArray])
  return (
    <div
    className='wish'
    >
          <ProcessBar percent={percentArray} total={mainList.list?mainList.list.length:1} />
          <div className="wishContainer">
          <div className="form">
            <div className="question-wrapper">
            <BackButtonNew
                  setQuestion={setQuestion}
                  percentArray={percentArray}
                  question={question}
                  wishDetail={wishDetail}
                  setWishDetail={setWishDetail}
                  mainList={mainList}
                  indexArray={indexArray}
                  setIndexArray={setIndexArray}
                  setPercentArray={setPercentArray}
                  setChanged={setChangedArray}
                  changed={changedArray}
                  
                />
                <div className="question">
                <QuestionNew question={mainList?.list?.[question]} />

                {mainList.list[question].type==="img"?
                <img src={Svg} alt="" />  
              :null}
                {mainList.list?.[question].type==="text"?
          
                      <InputViewNew
                      mainList={mainList}
                      inputRef={inputRef}
                      question={question}
                      text={text}
                      setText={setText}
                      wishDetail={wishDetail}
                      setWishDetail={setWishDetail}
                      />
              :null}
                {mainList.list?.[question].type==="select"?
                  <SelectBox
                  questionData={questionData}
                  wishDetail={wishDetail}
                  secondArray={secondArray}
                  thirdArray={thirdArray}
                  setWishDetail={setWishDetail}
                  setQuestionData={setQuestionData}
                  setEndForm={setEndForm}
                  setSecondArray={setSecondArray}
                  setThirdArray={setThirdArray}
                  />
              :null}
              {mainList.list?.[question].subq?<span>{mainList.list[question].subq}</span>:null}
                  <div className='row'>
                      {mainList.list[question].nest?.map(i=>{
                          return(
                      <BoxViewNew
                      key={i.id}
                      lengthofanswers={mainList.list[question].nest.length}
                      onClick={onClick}
                      isSelected={isSelected}
                      item={i}
                      />
                      
                          )
                      })}

                  </div>
                  {mainList.list?.[question].type==="selectMany"? 
            
                      <SelectMany
                      questionData={questionData}
                      setQuestionData={setQuestionData}
                      wishDetail={wishDetail}
                      setWishDetail={setWishDetail}
                      isSelectedinArray={isSelectedinArray}
                      selectedItems={selectedItems}
                      setSelectedItems={setSelectedItems}
                      />
              :null}
                  
                </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default WishListNew