import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const planetsCard = {
  width: "18rem",
  background: "#F2F2F2",
  textAlign: "left"
};


export const Planets = () => {

  const { store, actions } = useContext(Context)

  //load planets from API
  actions.fetchPlanetsStarWars();

  return (
    <>
      <div>
        <h1 className="text-danger">Planets</h1>
      </div>

      

      

    </>
  )
};


/*<div className="row align-items-center">
      {store.planetsStarWars.map((value, index) => {
          return (
            <div className="col-4 mx-4 mt-4 p-2 rounded" style={planetsCard} key={index}>
              <img src="" className="card-img-top" alt="..."></img>
              <div className="card-body p-3">
                <h3 className="card-title" >{value.name}</h3>
                <p className="card-text" > Population: </p>
                <p className="card-text" > Terrain: </p>
                <Link to={"/single/" + index}>
                  <button className="btn btn-warning">Learn more!</button>
                </Link>
              </div>
            </div>
          )
        })}

      </div>*/