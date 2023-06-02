import axios from "axios";
import { Pokemon } from '../types/pokemon';
import { PokemonsData, Snippet } from '../types/pokemonsData';

export function getLinks(url: string): Promise<PokemonsData> {
  return axios.get(url)
    .then(response => response.data);
}

export const getAll = (url: string) => {
  return getLinks(url)
    .then(data => {
      const nextUrl = data.next;
      const pokemons = Promise.all(
        data.results.map((snippet: Snippet) => {
          return axios.get<Pokemon>(snippet.url)
            .then(response => response.data);
        })
      );
      return {pokemons, nextUrl};
    });
};
