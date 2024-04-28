const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}




const Part = (props) => {
  const totalExercises = props.course.parts.reduce(
    (acc, part) => acc + part.exercises,
    0
  );

  return (
    <div>
      <h2>{props.course.name}</h2>
      <ul>
        {props.course.parts.map((part) => (
          <li key={part.id}>
            {part.name} - {part.exercises} exercises
          </li>
        ))}
      </ul>
      <p>Total exercises: {totalExercises}</p>
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
      <h1>Web development curriculum</h1>
      <Header name={props.courses.name} />
      <Content courses={props.courses} />
    </div>
  );
};

export default Course;
