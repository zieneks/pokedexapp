import { useQuery } from '@tanstack/react-query';
import { PokemonDetail } from '../types';

const fetchPokemonDetail = async (name: string): Promise<PokemonDetail> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon data');
  }
  return await response.json();
};

export const usePokemonDetailQuery = (name: string) => {
  return useQuery<PokemonDetail, Error>({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemonDetail(name),
    enabled: !!name,
    staleTime: 10 * 60 * 1000, 
    gcTime: 15 * 60 * 1000, 
  });
}; 