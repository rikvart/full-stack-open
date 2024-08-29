function Countrylist(props) {


    console.log("props", props)

  return (
    <ul>
      {props.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default Countrylist;
