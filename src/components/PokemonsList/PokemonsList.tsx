import React from "react";
import { Pokemon } from '../../types/pokemon';
import { PokemonCard } from "../PokemonCard/PokemonCard";
import "./PokemonsList.scss";

type Props = {
  pokemons: Pokemon[],
  handleFilter: (filter: string) => void
};

export const PokemonsList: React.FC<Props> = ({ pokemons, handleFilter }) => (
  <div className="pokeColumns">
    <div className="pokeColumn">
      <div className="pokemonsgrid">
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} handleFilter={handleFilter} />
        ))}
      </div>
    </div>
    <div className="cardColumn"></div>
  </div>
);