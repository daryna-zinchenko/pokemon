import { PokeType } from "./pokeType";
import { GameIndice } from "./gameIndice";

export interface Pokemon {
  abilities: any;
  base_experience: number;
  forms: any;
  game_indices: GameIndice[];
  height: number;
  held_items: any;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any;
  name: string;
  order: number;
  species: any;
  sprites: any;
  stats: any;
  types: PokeType[];
  weight: number;
}
