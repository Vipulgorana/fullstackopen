import React from "react";

const Person = ({ person,deleteperson }) => {
  return <h5>{person.name} {person.number} <button onClick={() =>deleteperson(person.id)}> Delete </button></h5>;
};

export default Person;
