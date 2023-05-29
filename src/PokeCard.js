import React from 'react';

const PokeCard = ({ id, name, type, setSelectedPokemon }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  const handleCardClick = () => {
    const selectedPokemon = { id, name, type };
    setSelectedPokemon(selectedPokemon);
  };

  return (
    <div className="pokecard" onClick={handleCardClick}>
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      <p>Type: {type}</p>
    </div>
  );
};

export default PokeCard;