import { useState } from "react";

const Name = (props) => {
  return <div>{props.name}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();

    const newObj = { name: newName };

    const existingObject = persons.find(
      (object) => object.name === newObj.name
    );

    if (existingObject) {
      alert(`${newName} already exists in the phone book`);
      setNewName("");
    } else {
      persons.push(newObj);
      setNewName("");
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
