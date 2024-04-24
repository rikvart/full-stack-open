import { useState } from "react";

const Name = (props) => {
  return <div>{props.name}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();

    const newObj = {name: newName}
    

    if (persons.includes(newObj)) {
      alert("already in array");
      console.log("it is")
    } else {
      persons.push(newObj);
      setNewName("");
      console.log("it is not")
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={addName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Name key={person.name} name={person.name} />
        ))}
      </ul>
    </div>
  );
};

export default App;
