import { useQuery } from '@tanstack/react-query';
import { Pokemon } from '../types';

const fetchPokemonList = async (): Promise<Pokemon[]> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=60');
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon data');
  }
  const data = await response.json();
  
  // Fetch detailed data for each Pokemon
  const detailedData = await Promise.all(
    data.results.map(async (pokemon: { name: string }) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch ${pokemon.name}`);
      }
      return await res.json();
    })
  );
  
  return detailedData;
};

export const usePokemonQuery = () => {
  return useQuery<Pokemon[], Error>({
    queryKey: ['pokemonList'],
    queryFn: fetchPokemonList,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (garbage collection time)
  });
}; 