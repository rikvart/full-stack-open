import { useEffect, useState } from "react";
import Search from "./components/Search";
import axios from 'axios';
import Countrylist from "./components/Countrylist";

function App() {

  const [countryData, setCountryData] = useState({});

  const getAll = () => {
    const request = axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    return request.then(response => response.data)
    
  }
  
  useEffect(() => {
    getAll().then((initialData) => {
      setCountryData(initialData);
    });
  }, []);


  console.log("country data", countryData)

  return (
    <div>
      <Search />
      <Countrylist 
      data={countryData}/>
    </div>
  );
}

export default App;
