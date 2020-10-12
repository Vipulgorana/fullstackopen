import React from "react";

const Add = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      Name:
      <input onChange={handleChange} id="name" />
      number
      <input onChange={handleChange} id="number" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Add;
