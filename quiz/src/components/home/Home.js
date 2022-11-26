import React, { useState } from 'react'
import './home.css'
import Main from '../main/Main'
import Sidebar from '../sidebar/Sidebar'
const Home = ({ submitStart }) => {

  const [choice, setChoice] = useState([]);
  
  const selectedChoice = (id, option) => {
    setChoice(() => {
      let newArr = [...choice]
      newArr[id - 1] = option
      return newArr
    })
  }
  return (
    <div className='homeContainer'>
      <Sidebar choice={choice} />
      <Main selectedChoice={selectedChoice} choice={choice} submitStart={submitStart} />
    </div>
  )
}

export default Home