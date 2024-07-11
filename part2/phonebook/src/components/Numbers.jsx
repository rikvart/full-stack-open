import React from "react";
import { useState } from "react";


function Numbers(props) {



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
            {person.name} {person.number} <button value={person.id} onClick={props.handleDelete(person)}>DELETE</button>
          </li>
        ))}
      </ul>
  );
}

export default Numbers;
