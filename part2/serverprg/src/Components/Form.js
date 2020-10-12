import React from 'react';

const Form = ({input,sub}) =>{
  return(
    <form onSubmit={sub}>
      <input onChange={input}/>
      <button type="submit">Submit</button>
    </form>
  )
}


export default Form;