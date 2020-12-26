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

  const switchNameHandler = (newName) => {
    setPersons(
      [
        { name: newName, age: 30 },
        { name: "名前変更２", age: 45 },
        { name: "名前変更３", age: 50 }
      ])
  }

  return (
    <div className="App">
      <h1>Hi,I`m a React app.</h1>
      <button onClick={() => switchNameHandler('新しい名前')}>Switch Name</button>
      <Person
        name={persons[0].name}
        age={persons[0].age}
        click={() => switchNameHandler('新しい名前１')} />
      <Person
        name={persons[1].name}
        age={persons[1].age}
        click={() => switchNameHandler('新しい名前２')} />
      <Person
        name={persons[2].name}
        age={persons[2].age}
        click={() => switchNameHandler('新しい名前３')} >趣味はプログラミングです</Person>
    </div>
  );
}

export default App;
