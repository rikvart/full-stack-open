import { useState, useEffect } from "react";
import axios from "axios";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
import noteService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

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
        id: persons.length + 1,
      };
      axios.post("http://localhost:3001/persons", newPerson).then((response) => {
        console.log(response);
      });
      console.log("added");
      console.log(persons);
      setNewName("");
      setNewNumber("");
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilter = (event) => {
    const currentValue = filter;
    const filtered = users.filter((user) => user.name.includes(currentValue));
    setFilteredUsers(filtered);
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
