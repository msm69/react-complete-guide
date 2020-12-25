import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  const [persons, setPersons] = useState(
    [
      { name: "みずほ2", age: 29 },
      { name: "太郎2", age: 26 },
      { name: "次郎2", age: 24 }
    ]
  )

  let switchNameHandler = () => {
    setPersons(
      [
        { name: "名前変更１", age: 40 },
        { name: "名前変更２", age: 45 },
        { name: "名前変更３", age: 50 }
      ])
  }

  return (
    <div className="App">
      <h1>Hi,I`m a React app.</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={persons[0].name} age={persons[0].age} />
      <Person name={persons[1].name} age={persons[1].age} />
      <Person name={persons[2].name} age={persons[2].age} >趣味はプログラミングです</Person>
    </div>
  );
}

export default App;
