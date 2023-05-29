import React, { useState } from 'react';
import Pokedex from './Pokedex';
import PokeCard from './PokeCard';

const App = () => {
  const defaultPokemon = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ];

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div>
      <Pokedex
        pokemon={defaultPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      {selectedPokemon && (
        <PokeCard
          id={selectedPokemon.id}
          name={selectedPokemon.name}
          type={selectedPokemon.type}
        />
      )}
    </div>
  );
};

export default App;