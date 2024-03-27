import { useState } from "react";
import "./App.css";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <h1>Statistics</h1>
      <div className="stats">
        <div>Good {good}</div>
        <div>Neutral {neutral}</div>
        <div>Bad {bad}</div>
        <div>All {total}</div>
        <div>Average</div>
        <div>Total</div>
      </div>
    </div>
  );
};

export default App;
