import React, { useState, useEffect } from "react";
import { Person } from "./Person";
import * as API from "../api";

export const PeopleList = () => {
  
  const [peopleList, setPeopleList] = useState([]);
  const [nextUrl, setNextURL] = useState([]);

  // useEffect(() => {
  //   API.getPeople().then( data => {
  //     setPeopleList(data.results);
  //     setNextURL(data.next);
  //   })
  // }, [])

  return (
    <div id="people">
      <ul>
        <Person peopleList={peopleList} />
      </ul>
      <div className="actions">
        <button className="btn btn-red" onClick={ () => {
          setPeopleList([])
        } }>Next</button>
      </div>
    </div>
  )
}