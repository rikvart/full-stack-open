import { useEffect, useState } from "react";
import Search from "./components/Search";
import axios from 'axios';

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

  console.log(countryData)

  return (
    <div>
      <Search />
    </div>
  );
}

export default App;
