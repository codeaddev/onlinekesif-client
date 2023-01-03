import React from 'react'

const QuestionNew = ({
    question
}) => {
  return (
    <h4>{question.q?question.q:null}</h4>
  )
}

export default QuestionNew