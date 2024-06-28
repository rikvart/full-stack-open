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

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    console.log(event)
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

  return (
    <ul>
      {persons.map((person) => (
        <Contact key={person.number} contact={person} />
      ))}
    </ul>
  );
}

export default Numbers;
