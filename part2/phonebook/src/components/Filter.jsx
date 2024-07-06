import React from "react";
import { useState } from "react";

function Filter(props) {



  return (
    <div>
      Search: <input value={currentFilter} onChange={handleFilter} />
    </div>
  );
}

export default Filter;
