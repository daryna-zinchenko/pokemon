import React from "react";
import { Pokemon } from '../types/pokemon';

type Props = {
  pokemons: Pokemon[],
  handleFilter: (filter: string) => void
};

export const PokemonsList: React.FC<Props> = ({ pokemons, handleFilter }) => (
  <ul>
    {pokemons.map(pokemon => (
      <li
        key={pokemon.id}
      >
        {pokemon.name}
        {pokemon.types.map(indice => {
          return (
            <button
              key={indice.type.name}
              value={indice.type.name}
              onClick={(e) => handleFilter((e.target as HTMLButtonElement).value)}>
              {indice.type.name}
            </button>
          )
        })}
      </li>
    ))}
  </ul>
);