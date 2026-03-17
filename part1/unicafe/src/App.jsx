import { useState } from 'react'

const ConditionalRender = (props) => {

  console.log(props)
  if(props.all.length > 0)
    return (
    <Statistics bad={props.bad} neutral={props.neutral} good={props.good} />
    )
  else return (
    <div>No feedback recorded</div>
  )
} 


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
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])
  
  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <div>
      </div>
      <ConditionalRender all={all} good={good} neutral={neutral} bad={bad}/>
   </div>
    
  )
}

export default App;


