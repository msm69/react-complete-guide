import React from "react";

function person(props) {
  return (
    <div>
      <p onClick={props.click}>
        私は{props.name}、そして {props.age}歳だよ
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default person;
