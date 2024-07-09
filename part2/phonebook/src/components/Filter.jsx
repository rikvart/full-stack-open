import React from "react";
import { useState } from "react";

function Filter(props) {



  return (
    <div>
     <form>
        <div>
          name: <input value={props.filter} onChange={props.handleFilterChange} />
        </div>
      </form>
    </div>
  );
}

export default Filter;
