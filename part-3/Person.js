"use strict";

function Person({name, age, hobbies}) {
  return(
    <div>
      <p>Learn some information about this person</p>
      <p>Name: {name} Age: {age}</p>
      <p>{age >= 18? "please go vote!": "you must be 18"}</p>
      <ul>{hobbies.map(h => <li>{h}</li>)}</ul>
    </div>
  ) 
}