const Total = () => {};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    return <div>{props.course}</div>;
  };

  const Part = (props) => {
    return (
      <div>
        {props.part}: {props.exercises}
      </div>
    );
  };

  const Content = (props) => {
    return (
      <div>
        <Part
          part={course.parts[0].name}
          exercises={course.parts[0].exercises}
        />
        <Part
          part={course.parts[1].name}
          exercises={course.parts[1].exercises}
        />
        <Part
          part={course.parts[2].name}
          exercises={course.parts[2].exercises}
        />
      </div>
    );
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
