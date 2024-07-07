import React from "react";
import { useState } from "react";

function Numbers(props) {

  console.log(props.persons)

  const Contact = (props) => {
    return (
      <div>
        {props.contact.name} - {props.contact.number}
      </div>
    );
  };

  return (
    <ul>
      {props.persons.map((person) => (
        <Contact key={person.number} contact={person} />
      ))}
    </ul>
  );
}

export default Numbers;
