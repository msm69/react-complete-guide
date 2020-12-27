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

  return (
    <div className="App">
      <h1>Hi,I`m a React app.</h1>
      <button style={style} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
      {showPersons ? (
        <div>
          <Person
            name={persons[0].name}
            age={persons[0].age}
            click={() => switchNameHandler("新しい名前１")}
          />
          <Person
            name={persons[1].name}
            age={persons[1].age}
            click={() => switchNameHandler("新しい名前２")}
            changed={nameChangeHandler}
          />
          <Person
            name={persons[2].name}
            age={persons[2].age}
            click={() => switchNameHandler("新しい名前３")}
          >
            趣味はプログラミングです
          </Person>
        </div>
      ) : null}
    </div>
  );
}

export default App;
