export interface PokemonsData {
  count: number,
  next: string,
  previous: string,
  results: Snippet[]
}

export interface Snippet {
  name: string,
  url: string
}