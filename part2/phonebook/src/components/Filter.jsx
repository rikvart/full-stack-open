import React from "react";
import { useState } from "react";

function Filter(props) {


  const currentFilter = useState("")

  const handleFilter = (event) => {
    const currentValue = currentFilter;
    const filtered = users.filter((user) => user.name.includes(currentValue));
    setFilteredUsers(filtered);
  };



  return (
    <div>
      Search: <input value={currentFilter} onChange={handleFilter} />
    </div>
  );
}

export default Filter;
