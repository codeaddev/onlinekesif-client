import React from 'react'
import { useNavigate } from 'react-router-dom';
import BackChevron from "../../../components/svg/chevronBack.svg"
const BackButton = ({
    wishDetail,
    questionData,
    setQuestionData,
    mainList,
    setMainList,

}) => {
  
  let navigate=useNavigate()
    return (
    <button
          className='back-button'
          onClick={(e)=>{
            e.preventDefault();

            //setQuestionData({...questionData,percent:newPercentArray})

            if(Object.keys(wishDetail).length<1||questionData.list[questionData.current].q===mainList.list[0]?.q){
                setMainList({})
                navigate("/")
            }else{
              const newPercentArray=questionData.percent.slice(0,questionData.percent.length-1)
              var newPreQuestion=questionData.preQuestion.slice(0,questionData.preQuestion.length-1)
              var newPreQuestionIndex=questionData.preQuestionIndex.slice(0,questionData.preQuestionIndex.length-1)
              
              if(questionData.current===0||questionData.list[questionData.current].break&&!questionData.list[questionData.current].longBreak){
                
                setQuestionData({...questionData,
                  list:questionData.preQuestion[questionData.preQuestion.length-1],
                  current:questionData.preQuestionIndex[questionData.preQuestionIndex.length-1],
                  preQuestion:newPreQuestion,
                  preQuestionIndex:newPreQuestionIndex,
                  percent:newPercentArray,
                }
              )
                
              }else if(questionData.list[questionData.current].longBreak){
                setQuestionData({...questionData,
                  list:questionData.preQuestion[questionData.preQuestion.length-1],
                  current:questionData.preQuestion[questionData.preQuestion.length-1].length-1,
                  preQuestion:newPreQuestion,
                  preQuestionIndex:newPreQuestionIndex,
                  percent:newPercentArray,
                  
                })
              }
              
              else {
                setQuestionData({...questionData,current:questionData.current-1,percent:newPercentArray,})
              }
            }
          }
        }
          >
            <img src={BackChevron} alt="" />
          </button>
  )
}

export default BackButton