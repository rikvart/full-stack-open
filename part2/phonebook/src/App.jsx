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


  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter />
      <h3> add new</h3>
      <PersonForm persons={persons}/>
      <h2>Numbers</h2>
      <Numbers />
    </div>
  );
};

export default App;
