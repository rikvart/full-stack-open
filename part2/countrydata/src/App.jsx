import { useEffect, useState } from "react";
import Search from "./components/Search";
import axios from "axios";
import Countrylist from "./components/Countrylist";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [searchCountry, setSearchCountry] = useState({});

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountryData(response.data); // Access the data property
      });
  }, []);
  
 
  console.log("countrydata", countryData);

  return (
    <div>
      <Search />
      <Countrylist countryData={countryData} />
    </div>
  );
}

export default App;
