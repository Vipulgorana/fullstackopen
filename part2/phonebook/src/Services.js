import axios from "axios"
const baseUrl = "http://localhost:3001/persons";

const getAll = () =>{
  const request = axios.get(baseUrl);
  return request.then(res=>res.data);
}

const addPerson = (personObj) =>{
  const request = axios.post(baseUrl,personObj);
  return request.then(res=>res.data);
}

const deletePerson = (id) =>{
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(res=>res.data);
}

const replacePerson = (id,personObj) =>{
  console.log(id);
  const request = axios.put(`${baseUrl}/${id}`,personObj);
  return request.then(res=>res.data);
}

export default {
  getAll,
  addPerson,
  deletePerson,
  replacePerson
}