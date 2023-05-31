import React from "react";
import { Pokemon } from '../../types/pokemon';
import { PokemonCard } from "../PokemonCard/PokemonCard";
import "./PokemonsList.scss";
import { SelectedPokemon } from "../selectedPokemon/selectedPokemon";

type Props = {
  pokemons: Pokemon[],
  handleFilter: (filter: string) => void
};

export const PokemonsList: React.FC<Props> = ({ pokemons, handleFilter }) => (
  <div className="pokeColumns">
    <div className="pokeColumn">
      <div className="pokemons">
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} handleFilter={handleFilter} />
        ))}
      </div>
    </div>
    <div className="cardColumn">
      <SelectedPokemon pokemon={pokemons[1]} />
    </div>
  </div>
);
