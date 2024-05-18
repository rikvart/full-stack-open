import React from "react";

function Filter(props) {
  const handleFilter = (event) => {
    const value = event.target.value;
    const filtered = users.filter((user) => user.name.includes(value));
    setFilteredUsers(filtered);
  };

  return (
    <>
      Search: <input></input>
    </>
  );
}

export default Filter;
