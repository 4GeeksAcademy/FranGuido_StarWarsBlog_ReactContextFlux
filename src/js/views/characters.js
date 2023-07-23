import React, { useContext } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const Characters = () => {

  const { store, actions } = useContext(Context);
  // load characters from API
  actions.fetchCharacterStarWars()
  return (
    <>
      <div>Characters</div>

      


      <ul className="list-group">
        {store.characterStarWars.map((value, index) => {
          return (
          <li className="list-group-item" key={index}>
            <p>{value.name}</p>
            <Link to={"/single/" + index}>
              <button className="btn btn-warning">Learn more!</button>
            </Link>
          </li>)
        })}
      </ul>







    </>
  )
};