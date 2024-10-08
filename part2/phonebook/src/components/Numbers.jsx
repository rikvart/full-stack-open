import React from "react";
import { useState } from "react";
import personsService from "../services/persons";

function Numbers(props) {

  const handleDelete = (event) => {
   if (window.confirm("do you want to delete this number?")) {
      const id = event.target.value;
      personsService.remove(id);
      console.log("deleted" + event.target.value);
   } else {
    
   }
      
   
    
  };

  const Contact = (props) => {
    return (
      <div>
        {props.contact.name} - {props.contact.number}
      </div>
    );
  };

  return (
    <ul>
        {props.filteredPersons.map(person => (
          <li key={person.id}>
            {person.name} {person.number} <button value={person.id} onClick={handleDelete}>Delete</button>
          </li>
        ))}
      </ul>
  );
}

export default Numbers;
