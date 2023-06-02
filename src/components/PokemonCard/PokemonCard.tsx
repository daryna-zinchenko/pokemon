import React from "react";
import { Pokemon } from "../../types/pokemon";
import "./PokemonCard.scss";

type Props = {
  pokemon: Pokemon,
  handleFilter: (filter: string) => void,
  handleChoise: (pokemon: Pokemon) => void
};

export const PokemonCard: React.FC<Props> = ({ pokemon, handleFilter, handleChoise }) => (
  <div
    className="pokemon"
    key={pokemon.id}
    onClick={() => handleChoise(pokemon)}
  >
    <img className="pokemon__img" alt=""></img>
    <p className="pokemon__name">{pokemon.name}</p>
    <div 
      className="pokemon__types"
      onClick={(event) => event.stopPropagation()}
    >
      {pokemon.types.map(indice => {
        return (
          <button
            className={indice.type.name + " pokemon__type"}
            key={indice.type.name}
            value={indice.type.name}
            onClick={(e) => handleFilter((e.target as HTMLButtonElement).value)}>
            {indice.type.name}
          </button>
        )
      })}
    </div>
  </div>
);