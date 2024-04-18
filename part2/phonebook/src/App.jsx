import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewName] = useState(
    'a new note...'
  ) 

  const addName = (event) => {
      event.preventDefault();
      setPersons(persons + newName)
      console.log("event clicked", event.target)

  }


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const Name = (props) => {
    <>
      {props.name}
    </>
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Name key={person.name} name={person.name} />
        )}
      </ul>
    </div>
  )
}

export default App