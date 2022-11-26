import React, { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import data from '../questionData'
import './main.css'
import questionMark from '../img/questionMark.png'

const Main = ({ selectedChoice, choice, submitStart }) => {
    const [index, setIndex] = useState(0)
    const { id, question, options } = data[index]

    const nextQue = () => {
        if (index < data.length - 1) {
            setIndex(() => {
                const newIndex = index + 1
                return newIndex
            })
        }
        if (index === data.length - 2) {
            document.getElementById('nextBtn').style.display = 'none';
            document.getElementById('prevBtn').style.display = 'inline';
        } else {
            document.getElementById('nextBtn').style.display = 'inline';
            document.getElementById('prevBtn').style.display = 'inline';
        }
    }

    const prevQue = () => {
        if (index > 0) {
            setIndex(() => {
                const newIndex = index - 1
                return newIndex
            })
        }
        if (index === 1) {
            document.getElementById('prevBtn').style.display = 'none';
            document.getElementById('nextBtn').style.display = 'inline';
        } else {
            document.getElementById('prevBtn').style.display = 'inline';
            document.getElementById('nextBtn').style.display = 'inline';
        }
    }

    return (
        <div className='mainContainer'>
            <div className="questionMark"><img className='questionMarkImg' src={questionMark} alt="" /></div>
            <div className='upperSection'>
                <span className="leftBtn arrowBtn" id='prevBtn' onClick={prevQue}>
                    <FaArrowAltCircleLeft />
                </span>
                <span className="mainHeading">Attempt Questions Here</span>
                <span className="rightBtn arrowBtn" onClick={nextQue} id='nextBtn'>
                    <FaArrowAltCircleRight />
                </span>
            </div>

            <div className="queContainer">
                <h3 className="question">Question #{id}. {question}</h3>
            </div>

            <div className="optionContainer">
                {options.map((option) => {
                    return <div key={option}>
                        <input type="radio" name={id + question} value={option} checked={choice[id - 1] === option} onChange={() => { selectedChoice(id, option) }} />{option}
                    </div>
                })
                }
            </div>

            {!choice.includes(undefined) && choice.length === data.length ? <button type="submit" onClick={() => { submitStart(data.length, choice) }}>Submit</button> : ""}

        </div>

    )
}

export default Main