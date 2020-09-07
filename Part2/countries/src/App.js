import React, { useState, useEffect } from "react";
import axios from "axios";
import Info from "./components/info";
const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setData(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setCountries(
      data.filter((country) =>
        country.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      find countries
      <input value={search} onChange={handleChange} />
      <Info countries={countries} handleChange={handleChange} />
    </div>
  );
};

export default App;
