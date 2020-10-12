import React from "react";
import Person from "./Person";

const Contactlist = ({persons,deleteperson}) => {
  const personList = persons.map((person) => (
    <Person person={person} key={person.id} deleteperson={deleteperson} />
  ));
  return <>{personList}</>;
};

export default Contactlist;
