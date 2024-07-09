import { useState } from "react";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 123123123 },
    { name: "Berto Hala", number: 1212312312 },
    { name: "Jürg Mees", number: 12123123123 },
  ]);

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    console.log(newName)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    console.log(newNumber)
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      persons.push({name: newName, number: newNumber})
      console.log("added")
      console.log(persons)
      setNewName("")
      setNewNumber("")
    
  }

  const handleFilterChange = (event) => {

  }

  return (
    <div>
      <PersonForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleFilterChange={handleFilterChange}
      />
      <Numbers persons={persons} />
    </div>
  );
};

export default App;
