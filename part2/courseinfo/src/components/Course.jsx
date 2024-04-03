
  
  const Header = ({ courses }) => <h1>{courses.course}</h1>;
  
  const Total = ({ sum }) => <p>Number of exercises {sum}</p>;
  
  const Part = ({ part }) => (
    <p>
      {part.name} {part.exercises}
    </p>
  );
  
  const Content = ({ parts }) => (
   
    <>
      <Part part={parts.courses[0]} />
      <Part part={parts.courses[0]} />
      <Part part={parts.courses[0]} />
    </>
  );


  const Course = (props) => {


    return (
      <div>
        <Header courses={props.courses[0].name} />
        <Content parts={arr.courses} />
        <Total
          sum={1}
        /> 
      </div>
    );
  };

  export default Course;