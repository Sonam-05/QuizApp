import React from 'react'
import './sidebar.css'
import luck from '../img/thumbWithStar.png'
const Sidebar = ({ choice }) => {
    return (
        <div>
            <div className="sideContainer">
                <div className="imageContainer">
                    <img className='star' src={luck} alt="" />
                </div>
                <h3 className="sidebarHeading">Review Answers Here</h3>
                {choice.map((option, index) => {
                    return <div key={index} >
                        {option && <li> {index + 1
                        }. {option}</li>}
                    </div>
                })}
            </div>

        </div>
    )
}

export default Sidebar