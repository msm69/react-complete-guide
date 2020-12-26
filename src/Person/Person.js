import React from 'react';

function person(props) {
  return (
    <div>
      <p onClick={props.click}>私は{props.name}、そして {props.age}歳だよ</p>
      <p>{props.children}</p>
    </div>
  );
}

export default person;