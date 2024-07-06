import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  
  ])
  const [filter, setFilter] = useState("")
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  
  
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();

    const newObj = { name: newName, number: newNumber };

    console.log(newObj);

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


  const handleFilter = (event) => {
    const currentValue = currentFilter;
    const filtered = users.filter((user) => user.name.includes(currentValue));
    setFilteredUsers(filtered);
  };
  



  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
      filter={filter}
      handleFilter={handleFilter()}
      
      />
      <h3> add new</h3>
      <PersonForm persons={persons}/>
      <h2>Numbers</h2>
      <Numbers />
    </div>
  );
};

export default App;
