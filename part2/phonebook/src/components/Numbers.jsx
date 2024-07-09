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
      {props.personsToShow.map((person) => (
        <Contact key={person.number} contact={person} />
      ))}
    </ul>
  );
}

export default Numbers;
