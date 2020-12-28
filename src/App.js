import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [persons, setPersons] = useState([
    { name: "みずほ2", age: 29 },
    { name: "太郎2", age: 26 },
    { name: "次郎2", age: 24 },
  ]);

  const [showPersons, setShowPersons] = useState(false);

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  const switchNameHandler = (newName) => {
    setPersons([
      { name: newName, age: 30 },
      { name: "名前変更２", age: 45 },
      { name: "名前変更３", age: 50 },
    ]);
  };

  const nameChangeHandler = (event) => {
    setPersons([
      { name: "みずほ２", age: 30 },
      { name: event.target.value, age: 45 },
      { name: "名前変更３", age: 50 },
    ]);
  };

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  };

  let personsData = null;
  if (showPersons) {
    personsData = (
      <div>
        {persons.map((person) => {
          return <Person name={person.name} age={person.age} />;
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi,I`m a React app.</h1>
      <button style={style} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
      {personsData}
    </div>
  );
}

export default App;
