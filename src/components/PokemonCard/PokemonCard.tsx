import React from "react";
import { Pokemon } from "../../types/pokemon";
import "./PokemonCard.scss";

type Props = {
  pokemon: Pokemon,
  handleFilter: (filter: string) => void
};

export const PokemonCard: React.FC<Props> = ({ pokemon, handleFilter }) => (
  <div
    className="pokemon"
    key={pokemon.id}
  >
    <img className="pokemon__img"></img>
    <p className="pokemon__name">{pokemon.name}</p>
    <div className="pokemon__types">
      {pokemon.types.map(indice => {
        return (
          <button
            className={indice.type.name}
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