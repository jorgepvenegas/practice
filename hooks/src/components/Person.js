import React from "react";

export const Person = ({peopleList}) => {
  if(!peopleList.length) {
    return <p>Loading...</p>
  }
  
  return peopleList.map( (p, i) => 
    <li key={i}>
      <div className="person">
        <h3>{p.name}</h3>
        <p><b>Height: </b>{p.height}</p>
        <p><b>Gender: </b>{p.gender}</p>
        <p><b>Hair color: </b>{p.hair_color}</p>
        <p><b>Mass: </b>{p.mass} kg</p>
      </div>
    </li>
  )
}