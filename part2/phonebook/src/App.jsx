import { useState } from "react";

const Contact = (props) => {
  return <div>{props.contact.name} - {props.contact.number}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "05041000418" }]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addName = (event) => {
    event.preventDefault();

    const newObj = { name: newName, number: newNumber};

    console.log(newObj)

    const existingObject = persons.find(
      (object) => object.number === newObj.number
    );

    if (existingObject) {
      alert(`${newName} already exists in the phone book`);
      setNewName("");
    } else {
      persons.push(newObj);
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
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
          <Contact key={person.number} contact={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
