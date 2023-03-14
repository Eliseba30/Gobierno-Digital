import axios from "axios"
import React from "react";

const aoi =()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
export default api;
