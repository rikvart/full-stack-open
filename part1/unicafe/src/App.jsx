import { useState } from 'react'


const Statistics = (props) => {

  const total = props.good + props.neutral + props.bad
  const average = ((props.good * 1) + (props.bad * -1) )/ total
  const positive = props.good / total * 100 + "%"
  return (
    <div>
       <h1>Statistics</h1>
      <div>
        Good = {props.good}
      </div>
      <div>
        Neutral = {props.neutral}
      </div>
      <div>
        Bad = {props.bad}
      </div>
      <div>
        all {total}
      </div>
      <div>
        {average}
      </div>
      <div>
        {positive}
      </div>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <div>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
   </div>
    
  )
}

export default App;


