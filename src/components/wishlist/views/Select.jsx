import React from 'react'
import Select from 'react-select'

const SelectBox = ({
    questionData,
    wishDetail,
    secondArray,
    thirdArray,
    setWishDetail,
    setQuestionData,
    setEndForm,
    setSecondArray,
    setThirdArray

}) => {
  return (
    <div className='row'>
           
                {questionData.list?.[questionData.current].label.map(i=>{
                   
                    return(
                    <div 
                    key={i.id}
                    className="select-in-row">
                    <label>{i.label}</label>
                    <Select
                    className='select'
                    placeholder="Seçiniz"
                    defaultInputValue={wishDetail[i.id]?wishDetail[i.id].a:""}
                    options={i.first?i.array:i.second?secondArray:thirdArray}

                    onChange={(event)=>{
                      var Question=questionData.list[questionData.current]
                    
                      var newCurrentArray=[...questionData.percent,i.p]
                      if(i.proceed){
                          setWishDetail({...wishDetail,[i.id]:{id:i.id,q:i.alt+" "+i.label,a:event.label}})
                          setQuestionData({...questionData,current:questionData.current+1,percent:newCurrentArray})
                          if(i.endForm){
                            setEndForm(true)
                          }
                          
                        }else{
                          setWishDetail({...wishDetail,[i.id]:{id:i.id,q:i.alt+" "+i.label,a:event.label}})
                          if(i.first){
                              setSecondArray(event.nest)
                          }else{
                              setThirdArray(event.nest)    
                          }
                        }
                        
                    }}
                    />
                </div>
          
                    )
                })}
          </div>
  )
}

export default SelectBox