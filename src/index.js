import React from "react";
import ReactDOM from "react-dom";

const fName = "Mark";
const lName = "Magee";
const number = 9;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {number} </p>
  </div>,
  document.getElementById("root")
);
