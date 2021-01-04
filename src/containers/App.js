import React, { useState } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cookpit from "../Cockpit/Cockpit";

function App() {
  const [persons, setPersons] = useState([
    { id: "asdf", name: "みずほ2", age: 29 },
    { id: "qwer", name: "太郎2", age: 26 },
    { id: "zxcv", name: "次郎2", age: 24 },
  ]);

  const [showPersons, setShowPersons] = useState(false);

  const nameChangeHandler = (event, id) => {
    const personIndex = persons.findIndex((element) => {
      return element.id === id;
    });

    const targetPerson = { ...persons[personIndex] };
    targetPerson.name = event.target.value;

    const newPersons = [...persons];
    newPersons[personIndex] = targetPerson;

    setPersons(newPersons);
  };

  const deletePersonHandler = (personIndex) => {
    // const newPersons = persons.slice(0, persons.length);
    const newPersons = [...persons];
    newPersons.splice(personIndex, 1);
    setPersons(newPersons);
  };

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  };

  let personsData = null;
  if (showPersons) {
    personsData = (
      <Persons
        persons={persons}
        clicked={deletePersonHandler}
        changed={nameChangeHandler}
      />
    );
  }

  return (
    <div className="App">
      <Cookpit
        showPersons={showPersons}
        persons={persons}
        clicked={togglePersonsHandler}
      />
      {personsData}
    </div>
  );
}

export default App;
