import axios from "axios";

const BASE_URL = "https://swapi.co/api";

export const getPeople = () => new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/people`)
      .then( response => {
        resolve(response.data)
      })
      .catch( err => {
        reject(err);
      })
  })