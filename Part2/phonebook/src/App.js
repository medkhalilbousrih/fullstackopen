import React, { useState, useEffect } from "react";
import Filter from "./components/filter";
import axios from "axios";
const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => setPersons(response.data));
  }, []);

  console.log(persons);

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let p of persons) {
      if (p.name === newName) {
        alert(`${newName} already added to phonebook`);
        setNewName("");
        return;
      }
    }
    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value);
  };

  const show = () => {
    const list = persons.filter((p) => p.name.includes(newFilter));
    return list.map((p) => (
      <p key={p.name}>
        {p.name} {p.number}
      </p>
    ));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {show()}
    </div>
  );
};

export default App;
