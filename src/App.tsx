import React, { useEffect, useState } from 'react';
import './App.scss';
import { PokemonsList } from './components/PokemonsList/PokemonsList';
import { getAll } from './api/pokemons';
import { Pokemon } from './types/pokemon';

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [visiblePokemons, setVisiblePokemons] = useState<Pokemon[]>([]);
  const [fetchUrl, setFetchUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon/?offset=48&limit=12');

  const getPokemons = async () => {
    const pokemonsData = await getAll(fetchUrl);
    setPokemons([...pokemons, ...await pokemonsData.pokemons]);
    setVisiblePokemons([...visiblePokemons, ...await pokemonsData.pokemons]);
    setFetchUrl(pokemonsData.nextUrl)
  };

  useEffect(() => {
    getPokemons();
  }, []);

  function handleFilter(filter: string) {
    const filteredPokemons = pokemons.filter(pokemon => pokemon.types
      .find(types => types.type.name === filter))
    setVisiblePokemons(filteredPokemons);
  };

  function handleLoadMore() {
    getPokemons();
  };


  return (
    <div className='App'>
      <h1 
      className='appTitle'
      onClick={() => setVisiblePokemons(pokemons)}
      >
        Pokedex
      </h1>
      <PokemonsList 
        fetchUrl={fetchUrl}
        pokemons={visiblePokemons}
        handleFilter={handleFilter}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};