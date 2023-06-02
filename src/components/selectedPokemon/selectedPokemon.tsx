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
      <p className="selectedPokemon__name">{pokemon.name + " #" + String(pokemon.id).padStart(3, '0')}</p>
      <div className="selectedPokemon__grid">
        <p className="selectedPokemon__gridItem">Type</p>
        <div className="selectedPokemon__gridItem">
          {pokemon.types.map(type => (
            <div className="selectedPokemon__type" key={type.type.name}>{type.type.name}</div>
          ))}
        </div>
        <p className="selectedPokemon__gridItem">Attack</p>
        <p className="selectedPokemon__gridItem">{(pokemon.stats
          .find((stat: {}) => Object.values(stat)
          .find((obj: any) => obj.name === 'attack'))).base_stat}</p>
        <p className="selectedPokemon__gridItem">Defense</p>
        <p className="selectedPokemon__gridItem">{(pokemon.stats
          .find((stat: {}) => Object.values(stat)
          .find((obj: any) => obj.name === 'defense'))).base_stat}</p>
        <p className="selectedPokemon__gridItem">HP</p>
        <p className="selectedPokemon__gridItem">{(pokemon.stats
          .find((stat: {}) => Object.values(stat)
          .find((obj: any) => obj.name === 'hp'))).base_stat}</p>
        <p className="selectedPokemon__gridItem">SP Attack</p>
        <p className="selectedPokemon__gridItem">{(pokemon.stats
          .find((stat: {}) => Object.values(stat)
          .find((obj: any) => obj.name === 'special-attack'))).base_stat}</p>
        <p className="selectedPokemon__gridItem">SP Defense</p>
        <p className="selectedPokemon__gridItem">{(pokemon.stats
          .find((stat: {}) => Object.values(stat)
          .find((obj: any) => obj.name === 'special-defense'))).base_stat}</p>
        <p className="selectedPokemon__gridItem">Speed</p>
        <p className="selectedPokemon__gridItem">{(pokemon.stats
          .find((stat: {}) => Object.values(stat)
          .find((obj: any) => obj.name === 'speed'))).base_stat}</p>
        <p className="selectedPokemon__gridItem">Weight</p>
        <p className="selectedPokemon__gridItem">{pokemon.weight}</p>
        <p className="selectedPokemon__gridItem">Total moves</p>
        <p className="selectedPokemon__gridItem">{pokemon.moves.length}</p>
      </div>
    </div>
  )
}