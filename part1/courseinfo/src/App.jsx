const Part = (props) => {
  return (
    <div>
      {props.part}: {props.exercises}
    </div>
  );
};

const Header = () => {};

const Total = () => {};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Content = (props) => {
    return (
      <div>
        <Part part={part1} exercises={exercises1} />
        <Part part={part2} exercises={exercises2} />
        <Part part={part3} exercises={exercises3} />
      </div>
    );
  };

  return (
    <div>
      <h1>{course}</h1>
      <Content />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;
