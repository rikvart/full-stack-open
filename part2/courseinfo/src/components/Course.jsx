
  
  const Header = ({ course }) => <h1>{course}</h1>;
  
  const Total = ({ sum }) => <p>Number of exercises {sum}</p>;
  
  const Part = ({ part }) => (
    <p>
      {part.name} {part.exercises}
    </p>
  );
  
  const Content = ({ parts }) => (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  );


  const Course = (props) => {
    return (
      <div>
        <Header courses={props.courses} />
        <Content parts={props.courses} />
        <Total
          sum={props.parts.reduce(0,3)}
        />
      </div>
    );
  };

  export default Course;