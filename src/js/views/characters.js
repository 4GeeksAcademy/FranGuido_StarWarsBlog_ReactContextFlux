import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const characterCard = {
  width: "18rem",
  background: "#F2F2F2",
  textAlign: "left"
};



export const Characters = () => {

  
  const { store, actions } = useContext(Context);

  
  // load characters from API
  actions.fetchCharacterStarWars()

  const [characterSW, setCharacterSW] = useState([]);

  useEffect(() =>{
    fetch("https://www.swapi.tech/api/people")
    .then(response => response.json())
    .then(data => {
      const characterSWURL = data.results.map(result => result.url);

      // Get all characters' URL
      Promise.all(characterSWURL.map((url) => fetch(url)
      .then(response => response.json())))

      // Get characters' info (properties)
    .then((charaterSWData) =>{
      const characterInfo = charaterSWData.map((data) =>{
        id: data.result.uid;
        gender: `${data.result.properties.gender}`;
        height: `${data.result.properties.height}`;
        picture: `https://starwars-visualguide.com/#/characters/${data.result.uid}.jpg`;})})  

        setCharacterSW(characterInfo);
    }).catch(err => err)
  }, [])


  return (
    <>
      <div>
        <h1 className="text-danger">Characters</h1>
      </div>

    
      <div className="row align-items-center">
        {store.characterStarWars.map((value, index) => {
          return (
            <div className="col-4 mx-4 mt-4 p-2 rounded" style={characterCard} key={index}>
              <img src="" className="card-img-top" alt="..."></img>
              <div className="card-body p-3">
                <h3 className="card-title" >{value.name}</h3>
                <p className="card-text" > Gender: </p>
                <p className="card-text" > Hair color: </p>
                <p className="card-text" > Eye color: </p>
                <Link to={"/single/" + index}>
                  <button className="btn btn-warning">Learn more!</button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      
    </>
  )
  
};



/*<ul className="list-group">
        {store.characterStarWars.map((value, index) => {
          return (
          <li className="list-group-item" key={index}>
            <p>{value.name}</p>
            <Link to={"/single/" + index}>
              <button className="btn btn-warning">Learn more!</button>
            </Link>
          </li>)
        })}
      </ul>*/
