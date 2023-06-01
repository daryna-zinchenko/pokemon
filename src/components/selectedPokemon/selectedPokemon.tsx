import React from "react";
import "./selectedPokemon.scss"
import { Pokemon } from "../../types/pokemon";

type Props = {
  pokemon: Pokemon;
};
export const SelectedPokemon: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="selectedPokemon"
    >
      <img className="selectedPokemon__img" alt=""></img>
      <p className="selectedPokemon__name">{pokemon.name}</p>
      <div className="selectedPokemon__types">
        {pokemon.types.map(indice => {
          return (
            <button
              className={indice.type.name}
              key={indice.type.name}
              value={indice.type.name}
            >
              {indice.type.name}
            </button>
          )
        }
        )}
    </div>
    </div>
  )
}