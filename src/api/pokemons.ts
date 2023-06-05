import axios, { AxiosResponse } from "axios";
import { Pokemon } from '../types/pokemon';
import { PokemonsData, Snippet } from '../types/pokemonsData';

export function getLinks(url: string): Promise<PokemonsData> {
  return axios.get(url)
    .then((response: AxiosResponse<PokemonsData>) => response.data)
    .catch((error: any) => {
      throw new Error(`Error occurred while fetching data: ${error}`);
    });
}

export const getAll = (url: string) => {
  return getLinks(url)
    .then((data: PokemonsData) => {
      const nextUrl = data.next;
      const pokemons = Promise.all(
        data.results.map((snippet: Snippet) => {
          return axios.get<Pokemon>(snippet.url)
            .then((response: AxiosResponse<Pokemon>) => response.data)
            .catch((error: any) => {
              throw new Error(`Error occurred while fetching data: ${error}`);
            });
        })
      );
      return { pokemons, nextUrl };
    })
    .catch((error: any) => {
      throw new Error(`Error occurred while fetching data: ${error}`);
    });
};
