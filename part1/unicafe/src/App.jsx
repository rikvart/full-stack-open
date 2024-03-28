import { useState } from "react";
import "./App.css";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
};

const Statistics = (props) => {
  const average = (props.good + props.bad * -1) / props.total;
  const avg = average.toFixed(2) + " %";
  const positive = ((props.good / props.total) * 100).toFixed(1) + "%";

  if (props.total == 0)
    return("No feedback given")
  else
    return (
      <table>
        <tbody>
          <StatisticsLine label="good" value={props.good} />
          <StatisticsLine label="neutral" value={props.neutral} />
          <StatisticsLine label="bad" value={props.bad} />
          <StatisticsLine label="all" value={props.total} />
          <StatisticsLine label="average" value={avg} />
          <StatisticsLine label="positive" value={positive} />
        </tbody>
      </table>
    );
  
};

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.label}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
