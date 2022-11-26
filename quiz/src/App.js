import './App.css';
import Home from './components/home/Home';
import Result from './components/result/Result';
import data from './components/questionData'
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [score, setScore] = useState(0)

  const submitStart = (qcount, choice) => {
    setCount(qcount)
    let newCorrect = 0
    let newScore = 0
    for (let i = 0; i < choice.length; i++) {
      if (data[i].answer === choice[i]) {
        newCorrect = newCorrect + 1;
        newScore = (newCorrect / qcount) * 100;
        newScore = Math.round(newScore * 100) / 100
      }
    }
    setCorrect(newCorrect)
    setScore(newScore)
  }

  return (<>
    {count === 0 ? <Home submitStart={submitStart} /> : <Result count={count} correct={correct} score={score} />}
  </>
  )
}


export default App;

