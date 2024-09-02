import { useState, useEffect } from "react";

function Countrylist({ countryData }) {
  const [dataToList, setDataToList] = useState([]);

  // Update the state when the `countryData` prop changes
  useEffect(() => {
    if (Array.isArray(countryData)) {
      setDataToList(countryData);
    }
  }, [countryData]);

  // Ensure that dataToList is an array before rendering
  return (
    <ul>
      {dataToList.length > 0 ? (
        dataToList.map((country) => (
          <li key={country.name.common}>{country.name.common}</li> // Assuming `name.common` is the country name
        ))
      ) : (
        <p>Loading countries...</p>
      )}
    </ul>
  );
}

export default Countrylist;
