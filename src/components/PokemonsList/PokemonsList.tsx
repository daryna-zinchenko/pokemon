import React from "react";
import { Pokemon } from '../../types/pokemon';
import { PokemonCard } from "../PokemonCard/PokemonCard";
import "./PokemonsList.scss";
import { SelectedPokemon } from "../SelectedPokemon/selectedPokemon";

type Props = {
  pokemons: Pokemon[],
  handleFilter: (filter: string) => void,
  handleLoadMore: () => void,
  fetchUrl: string,
};

export const PokemonsList: React.FC<Props> = ({ 
  pokemons,
  handleFilter,
  handleLoadMore,
  fetchUrl
}) => {
  const [choosenPokemon, setChoosenPokemon] = React.useState<Pokemon | null>(null);

  function handleChoise(pokemon: Pokemon) {
    setChoosenPokemon(pokemon);
  }

  return (
    <div className="pokeColumns">
      <div className="pokeColumn">
        <div className="pokemons">
          {pokemons.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              handleFilter={handleFilter}
              handleChoise={handleChoise}
            />
          ))}
        </div>
        {fetchUrl !== null && (
          <div
            className='loadButton'
            onClick={() => handleLoadMore()}
          >
            Load More
          </div>
          )}
      </div>
      <div className="cardColumn">
        {choosenPokemon && <SelectedPokemon pokemon={choosenPokemon} />}
      </div>
    </div>
  )
}
