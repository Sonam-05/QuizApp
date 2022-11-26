import { FcOk } from 'react-icons/fc'
import React from 'react'
import './result.css'
const Result = ({ count, correct, score }) => {
  return (
    <div className='resultContainer'>
      <div className="answerMark">
        <FcOk />
      </div>
      <h2 className="resultHeading">You have successfully submitted the Assessment</h2>
      <div className="lowerSection">
        <h3 className="basicOutput">- Questions Asked: {count}</h3>
        <h3 className="basicOutput">- Questions Correct: {correct}</h3><h3 className="basicOutput">- Your Score: {score}</h3>
      </div>
    </div>
  )
}

export default Result