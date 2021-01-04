import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Person from "../components/Persons/Person/Person";

function App() {
  const [persons, setPersons] = useState([
    { id: "asdf", name: "みずほ2", age: 29 },
    { id: "qwer", name: "太郎2", age: 26 },
    { id: "zxcv", name: "次郎2", age: 24 },
  ]);

  const [showPersons, setShowPersons] = useState(false);

  const StyledButton = styled.button`
    background-color: ${(props) => (props.alt ? "red" : "green")};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
      color: black;
    }
  `;

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
      <div>
        {persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => nameChangeHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
  }

  const classes = [];
  if (persons.length <= 2) {
    classes.push("red");
  }
  if (persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className="App">
      <h1>Hi,I`m a React app.</h1>
      <p className={classes.join(" ")}>正常に動作しています！</p>
      <StyledButton alt={showPersons} onClick={togglePersonsHandler}>
        Toggle Persons
      </StyledButton>
      {personsData}
    </div>
  );
}

export default App;
