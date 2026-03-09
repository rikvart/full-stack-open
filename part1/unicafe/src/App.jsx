import { useState } from 'react'


const Statistics = (props) => {

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = ((good * 1) + (bad * -1) )/ total
  const positive = good / total * 100 + "%"


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <div>
      </div>
      <h1>Statistics</h1>
      <div>
        Good = {good}
      </div>
      <div>
        Neutral = {neutral}
      </div>
      <div>
        Bad = {bad}
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

export default App;


