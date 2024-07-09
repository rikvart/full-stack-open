import React from "react";
import { useState } from "react";

function PersonForm(props) {


  return (
    <div>
      <form>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange} />
        </div>
        <div>
          number: <input value={props.newName} onChange={props.handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={props.handleSubmit}>
            add
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
