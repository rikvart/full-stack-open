import { useState } from "react";
import axios from 'axios';
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [filter, setFilter] = useState("");

  const filteredPersons =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    console.log(newName);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
    console.log(newNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (nameExists) {
      alert("Name already in phonebook");
      return;
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.legth + 1,
      };
      setPersons([...persons, newPerson]);
      console.log("added");
      console.log(persons);
      setNewName("");
      setNewNumber("");
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <PersonForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleFilterChange={handleFilterChange}
      />
      <Filter
        filter={filter}
        filteredPersons={filteredPersons}
        handleFilterChange={handleFilterChange}
      />
      <Numbers filteredPersons={filteredPersons} persons={persons} />
    </div>
  );
};

export default App;
