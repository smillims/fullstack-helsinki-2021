import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import FormPersons from "./components/FormPersons";
import Persons from "./components/Persons";

//const promise = axios.get("http://localhost:3001/persons");

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setNewFilter] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      const { data } = response;
      setPersons(data);
    });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    const findTwin = persons.find((person) => person.name === newName);

    if (!newName || !newPhone) return;

    if (findTwin) {
      alert(`${newName} is already exist`);
      return;
    }

    const nameList = {
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    };

    setPersons(persons.concat(nameList));
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handlePhoneChange = (event) => setNewPhone(event.target.value);
  const filterPhonebook = (event) => {
    const filterByPerson = persons.filter((person) => {
      if (!person.name.toLowerCase().includes(`${event.target.value}`.toLowerCase())) return false;
      return true;
    });
    setNewFilter([...filterByPerson]);
  };

  const checkFilter = () => {
    const outputPersons = (array) =>
      array.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ));

    if (newFilter.length !== 0) return outputPersons(newFilter);

    return outputPersons(persons);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filterPhonebook={filterPhonebook} />
      <div>
        <h2>Add a new</h2>
        <FormPersons handleClick={handleClick} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} />
      </div>
      <h2>Persons</h2>
      <Persons checkFilter={checkFilter} />
    </div>
  );
};

export default App;
