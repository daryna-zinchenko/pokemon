import React, { useEffect, useState } from 'react';
import './App.scss';
import { PokemonsList } from './components/PokemonsList/PokemonsList';
import { getAll } from './api/pokemons';
import { Pokemon } from './types/pokemon';

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [visiblePokemons, setVisiblePokemons] = useState<Pokemon[]>([]);

  const getPokemons = async () => {
    const pokemons = await getAll();
    setPokemons(pokemons);
    setVisiblePokemons(pokemons);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  function handleFilter(filter: string) {
    const filteredPokemons = pokemons.filter(pokemon => pokemon.types
      .find(types => types.type.name === filter))
    setVisiblePokemons(filteredPokemons);
  };


  return (
    <div className='App'>
      <h1 
      className='appTitle'
      onClick={() => setVisiblePokemons(pokemons)}
      >
        Pokedex
      </h1>
      <PokemonsList pokemons={visiblePokemons} handleFilter={handleFilter} />
    </div>
  );
};