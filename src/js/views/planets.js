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