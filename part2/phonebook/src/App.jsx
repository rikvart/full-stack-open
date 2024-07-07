import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number:  123123123
     },
     { name: 'Berto Hala',
      number:  1212312312
     },
     { name: 'bijou',
      number:  12123123123
     },

  ]) 

  

  


  const addPerson = (event) => {
     
  }

  return (
    <div>
    <PersonForm 
      addPerson={addPerson()}    
    />
    <Numbers persons={persons}/>
    </div>
  )
}

export default App;