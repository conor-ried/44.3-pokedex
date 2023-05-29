import React from 'react';
import Pokecard from './PokeCard';

const Pokedex = ({ pokemon }) => {
  return (
    <div className="pokedex">
      {pokemon.map(({ id, name, type }) => (
        <Pokecard key={id} id={id} name={name} type={type} />
      ))}
    </div>
  );
};

export default Pokedex;