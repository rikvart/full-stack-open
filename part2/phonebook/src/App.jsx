import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
import personsService from "./services/persons";
import "./index.css";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState("Some error happened");

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const fetchData = () => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  };

  const updatePersonList = () => {
    personsService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .then(fetchData());
  };

  const notification = ({ message }) => {
    if (message === null) {
      return null;
    }

    return <div className="error">{message}</div>;
  };

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

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (nameExists) {
      if (window.confirm(`${newName} is already in the phonebook. Replace the number?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber };

        personsService
          .update(updatedPerson.id, updatedPerson)
          .then(() => {
            setErrorMessage(`${newName}'s number updated successfully`);
            fetchData();
          })
          .catch((error) => {
            setErrorMessage(`Error updating ${newName}'s number`);
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      personsService
        .create(newPerson)
        .then(() => {
          setErrorMessage(`${newName} added successfully`);
          fetchData();
        })
        .catch((error) => {
          setErrorMessage("Error adding the person");
        });
    }

    setNewName("");
    setNewNumber("");
    setTimeout(() => {
      setErrorMessage(null);
    }, 3000); // Clear notification after 3 seconds
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
      <h1>Add contacts</h1>
      <PersonForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleFilterChange={handleFilterChange}
      />
      <Notification message={errorMessage} />
      <h1>Search</h1>
      <Filter
        filter={filter}
        filteredPersons={filteredPersons}
        handleFilterChange={handleFilterChange}
      />

      <h1>Numbers</h1>
      <Numbers filteredPersons={filteredPersons} persons={persons} />
    </div>
  );
};

export default App;
