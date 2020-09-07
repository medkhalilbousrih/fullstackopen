import React from "react";
import Weather from "./weather";
const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.nativeName}>{language.nativeName}</li>
        ))}
      </ul>
      <img src={country.flag} alt="country flag" style={{ width: "150px" }} />
      <Weather capital={country.capital}/>
    </div>
  );
};
export default Country;
