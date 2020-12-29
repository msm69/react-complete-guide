import React, { useState } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

function App() {
  const [persons, setPersons] = useState([
    { id: "asdf", name: "みずほ2", age: 29 },
    { id: "qwer", name: "太郎2", age: 26 },
    { id: "zxcv", name: "次郎2", age: 24 },
  ]);

  const [showPersons, setShowPersons] = useState(false);

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "lightgreen",
      color: "black",
    },
  };

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

    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: "lightred",
      color: "black",
    };
  }

  const classes = [];
  if (persons.length <= 2) {
    classes.push("red");
  }
  if (persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <StyleRoot>
      <div className="App">
        <h1>Hi,I`m a React app.</h1>
        <p className={classes.join(" ")}>正常に動作しています！</p>
        <button style={style} onClick={togglePersonsHandler}>
          Toggle Persons
        </button>
        {personsData}
      </div>
    </StyleRoot>
  );
}

export default Radium(App);
