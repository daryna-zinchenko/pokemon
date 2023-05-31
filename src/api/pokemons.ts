import axios from "axios";
import { Pokemon } from '../types/pokemon';
import { Snippet } from '../types/snippet';

const API_URL = `https://pokeapi.co/api/v2/pokemon`;

export function getLinks(): Promise<Snippet[]> {
  return axios.get(API_URL)
    .then(response => response.data.results);
}

export const getAll = () => {
  return getLinks()
    .then(snippets => {
      return Promise.all(
        snippets.map(snippet => {
          return axios.get<Pokemon>(snippet.url)
            .then(response => response.data);
        })
      );
    });
};
