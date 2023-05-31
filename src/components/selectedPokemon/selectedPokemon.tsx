import React from "react";
import "./selectedPokemon.scss"
import { Pokemon } from "../../types/pokemon";

type Props = {
  pokemon: Pokemon
};

export const SelectedPokemon: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="selectedPokemon">
      <div className="selectedPokemon__image">
        <img src='/' alt=""/>
      </div>
      <div className="selectedPokemon__info">
        <h2>{pokemon.name}</h2>
      </div>
    </div>
  );
}
