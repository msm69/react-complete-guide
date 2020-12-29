import React from "react";
import Radium from "radium";
import "./Person.css";

function person(props) {
  return (
    <div className="Person">
      <p onClick={props.click}>
        私は{props.name}、そして {props.age}歳だよ
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default Radium(person);
