import React, { useState } from 'react';
import CountryProfile from"./Countryprofile"

const Countries = ({data}) =>{

  const [cdata,setCdata] = useState();

  const countryList = data.length < 11 ? data.map((country)=>{
  return(data.length === 1 ? (<CountryProfile country={country} />)
        :
        (<p key={country.name}>{country.name} <button onClick={()=>showProfile(country)}>Show</button></p>))
  }) : <p>Please use specific letters</p>;


  const showProfile = (country) => {
    console.log("clicked",country.name)
    
    setCdata(<CountryProfile country={country} />);

  }



  return (
   <> {countryList}
      {cdata}
   </>
  )
}

export default Countries;