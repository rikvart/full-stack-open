import { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.label}</button>
    </>
  );
};

const Header = (props) => {
  return <h1>{props.label}</h1>;
};

const Anecdote = (props) => {
  return (
    <div>
      <div>{props.list[props.number]}</div>
      <div> has {props.votes} votes</div>
    </div>
  );
};

const MostVotes = (props) => {
  let max = props.votes[0];
  let maxIndex = 0;

  for (var i = 1; i < props.votes.length; i++) {
    if (props.votes[i] > max) {
      maxIndex = i;
      max = props.votes[i];
    }
  }

  return (
    <>
      <div>{props.list[maxIndex]}</div>
      <div>has {props.votes[maxIndex]} votes</div>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [random, setRandom] = useState(0);

  const handleNext = () => {
    setRandom(Math.floor(Math.random() * 8));
    setSelected(random);
  };

  const handleVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  };

  return (
    <div>
      <Header label="Anecdote of the day" />
      <Anecdote list={anecdotes} votes={votes[selected]} number={selected} />
      <Button handleClick={handleVote} label="vote" />
      <Button handleClick={handleNext} label="next anecdote" />
      <Header label="Anecdote with most votes" />
      <MostVotes list={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
