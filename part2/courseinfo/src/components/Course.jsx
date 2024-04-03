const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Total = (props) => <p>Number of exercises {}</p>;

const Part = (props) => (
  <p>
   
  </p>
);

const Content = ( props ) => (
  <>
    
  </>
);

const Course = (props) => {
  console.log(props);
  return (
    <div>
      <Header name={props.courses.name} />
      <Content parts={props.courses.parts} />
      <Total parts={props.courses.parts} />
    </div>
  );
};

export default Course;
