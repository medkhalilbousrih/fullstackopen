import React, { useState, useEffect } from "react";
import Filter from "./components/filter";
import Notification from "./components/notification";
import { create, getData, removeP, update } from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getData()
      .then((data) => {
        setPersons(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      name: newName,
      number: newNumber,
    };
    if (persons.find((p) => p.name === person.name)) {
      if (window.confirm("update phone number")) {
        const id = persons.find((p) => p.name === person.name).id;
        update(id, person).then((obj) => {
          setPersons(persons.map((p) => (p.id !== obj.id ? p : obj)));
        });
      }
    } else {
      create(person).then((obj) => {
        setPersons(persons.concat(obj));
        setNewName("");
        setNewNumber("");
      });
    }
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

  const handleClick = (p) => {
    if (window.confirm("delete " + p.name))
      removeP(p.id)
        .then(() => {
          setPersons(persons.filter((p1) => p.id !== p1.id));
          setMessage("deleted");
        })
        .catch((error) => {
          console.log("already deleted");
          setPersons(persons.filter((p1) => p.id !== p1.id));
        });
  };

  const show = () => {
    const list = persons.filter((p) => p.name.includes(newFilter));
    return list.map((p) => (
      <p key={p.id}>
        {p.name} {p.number}{" "}
        <button onClick={() => handleClick(p)}>delete</button>
      </p>
    ));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification  message={message}/>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <form onSubmit={handleSubmit}>
        <h2>add a new</h2>
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
