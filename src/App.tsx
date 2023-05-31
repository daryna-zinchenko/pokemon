import React, { useEffect, useState } from 'react';
import './App.scss';
import { PokemonsList } from './components/PokemonsList';
import { getAll, getFiltered } from './api/pokemons';
import { Pokemon } from './types/pokemon';

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      const pokemons = await getAll();
      setPokemons(pokemons);
    }
    fetchData();
  }, []);

  async function handleFilter(filter: string) {
    const pokemons = await getFiltered(filter);
    setPokemons(pokemons);
  };

  console.log(pokemons);

  return (
    <div>
      <h1>Pokedex</h1>
      <PokemonsList pokemons={pokemons} handleFilter={handleFilter} />
    </div>
  );
};