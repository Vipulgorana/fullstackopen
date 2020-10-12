import React, { useState, useEffect } from "react";
import axios from 'axios'
import Countries from "./Components/Countries"

function App() {

  const [countries,setCountries] = useState([]);
  const [query,setQuery] = useState("")


  useEffect(()=>{
    if(query !== ""){
      axios.get(`https://restcountries.eu/rest/v2/name/${query}`)
            .then((response)=>{
              setCountries(response.data)
            })
            .catch((err)=>{
              console.log("error",err)
            })
    }
  },[query])


  const handleInput = (e) => {
    setQuery(e.target.value)
  }


  return (
    <div className="App">
      <p>Countries</p>
      <form>
        <input onChange={handleInput} />
      </form>
      <Countries data={countries} />
    </div>
  );
}

export default App;
