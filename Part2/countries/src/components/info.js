import React from "react";
import Country from "./country";

const Info = ({ countries, handleChange }) => {
  if (countries.length > 10) {
    return <p>too many countries, be more specific.</p>;
  } else if (countries.length === 1) {
    const country = countries[0];
    return <Country country={country} />;
  }
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>
          {country.name}
          <button value={country.name} onClick={handleChange}>
            show
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Info;
