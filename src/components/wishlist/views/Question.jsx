import React from 'react'

const Question = ({
    questionData
}) => {
  return (
    <h4>{questionData.list?.[questionData.current].q}</h4>
  )
}

export default Question