const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Total = ({ courses }) => {
  console.log(courses); // Check if courses are correctly passed

  const totalExercises = courses.reduce((acc, course) => {
    return acc + course.parts.reduce((acc, part) => acc + part.exercises, 0);
  }, 0);

  console.log(totalExercises); // Check the totalExercises

  return (
    <div>
      <p>Total exercises: {totalExercises}</p>
    </div>
  );
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
      <Total courses={props.courses} />
    </div>
  );
};

export default Course;
