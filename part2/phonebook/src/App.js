import React, { useState, useEffect } from "react";
import "./App.css";
import Contactlist from "./Components/Contactslist";
import Add from "./Components/Add";
import Search from "./Components/Search";
import axios from "axios";
import Services from "./Services";
import Notification from "./Components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [errorMessage,setErrorMessage]=useState(null);

  useEffect(() => {
    console.log("effect");
    Services
    .getAll()
    .then((persons) => {
      setPersons(persons);
      console.log("rendering ", persons.length, " persons");
    });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    if (id === "name") setNewName(value);
    else if (id === "number") setNewNumber(value);
    else if (id === "filter") {
      const filter = persons.filter((person) => {
        return person.name === e.target.value;
      });
      if (filter.length > 0) {
        setFilteredPersons(filteredPersons.concat(filter));
      }
    }
  };

  const sentAlert = (message) => alert(message);

  const handleSubmit = (e) => {
    const personObj = {
      name: newName,
      number: newNumber,
    };
    const validator = persons.some((person) => person.name === personObj.name);
    if (validator) {
      const result = window.confirm(`${personObj.name} already exits in database do you want to replace him?`)
       const existingPerson = persons.find((p)=>p.name===personObj.name);
       const id = existingPerson.id;
      if(result === true){
        Services
        .replacePerson(id,personObj)
        .then((replacedPerson)=>{
          setPersons(persons.map((person)=>person.id !== id ? person : replacedPerson))
        })
      }
    } else {
      Services
      .addPerson(personObj)
      .then((person)=>{
        setPersons(persons.concat(person));
        setErrorMessage({message:`${personObj.name} is added to server`,bgcolor:"green"});
        setTimeout(()=>{
          setErrorMessage(null);
        },3000)
      })
      .catch((err)=>{console.log("error occured",err)});
    }
    e.preventDefault();
  };

  const handleDelete = (id) =>{
    console.log("delete clicked",id);
    const personToDelete = persons.find((p)=>p.id === id);
    const result = window.confirm(`Do you want do delete ${personToDelete.name} ?`)
    if(result===true){
      Services
    .deletePerson(id)
    .then((deletedPerson)=>{
      setPersons(persons.filter((p)=>p.id!==id));
      setErrorMessage({message:`${personToDelete.name} is removed from server`,bgcolor:"red"});
      setTimeout(()=>{
        setErrorMessage(null);
      },3000);
    })
    }
  }


  const filterList = !filteredPersons.length ? null : (
    <Contactlist persons={filteredPersons} />
  );

  return (
    <div>
      <Notification error={errorMessage} />
      <h1>Phonebook app</h1>
      <h2>Filter Users</h2>
      Find Users:
      <Search handleChange={handleChange} />
      {filterList}
      <h2>Add Users</h2>
      <Add handleChange={handleChange} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <Contactlist persons={persons} deleteperson={handleDelete} />
    </div>
  );
}

export default App;
