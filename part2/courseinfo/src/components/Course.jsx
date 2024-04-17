const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Total = (props) => {
  

  console.log(props)
  
  
  return <p>Total number of exercises:</p>;
};



const Part = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
      <ul>
        {props.course.parts.map(part => (
          <li key={part.id}>
            {part.name} - {part.exercises} exercises
          </li>
        ))}
      </ul>
    </div>
  );
};

const Content = (props) => (
  <>
    {props.courses.map(course => (
      <Part key={course.id} course={course} />
    ))}
  </>
);

const Course = (props) => {


  
  return (
    <div>
      <Header name={props.courses.name} />
      <Content courses={props.courses} />
      <Total parts={props.courses[1]} />
    </div>
  );
};

export default Course;
