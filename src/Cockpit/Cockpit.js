import React from "react";
import styled from "styled-components";

import "./Cookpit.css";

const cockpit = (props) => {
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

  const classes = [];
  if (props.persons.length <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div>
      <h1>Hi,I`m a React app.</h1>
      <p className={classes.join(" ")}>正常に動作しています！</p>
      <StyledButton alt={props.showPersons} onClick={props.clicked}>
        Toggle Persons
      </StyledButton>
    </div>
  );
};

export default cockpit;
