import axios from "axios";

const url = "http://localhost:3001/persons";

const getData = () => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(url, newPerson);
  return request.then((response) => response.data);
};

const removeP = (id) => {
  return axios.delete(url + "/" + id);
};

const update = (id, person) => {
  const request = axios.put(url + "/" + id, person);
  return request.then((response) => response.data);
};
export { create, getData, removeP, update };
