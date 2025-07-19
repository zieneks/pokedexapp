import { useState, useEffect } from 'react';
import { Pokemon } from '../types';
import { getCache, setCache } from '../utils/cache';

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}

export const usePokemonList = (limit: number = 20) => {
  const [data, setData] = useState<Pokemon[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonList = async (): Promise<void> => {
      const cacheKey = `pokemon-list-${limit}`;
      
      const cached = getCache<Pokemon[]>(cacheKey);
      if (cached) {
        setData(cached);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json: PokemonListResponse = await response.json();
        
        const pokemonDetails = await Promise.all(
          json.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            if (!detailResponse.ok) {
              throw new Error(`Failed to fetch details for ${pokemon.name}`);
            }
            return detailResponse.json();
          })
        );
        
        setCache(cacheKey, pokemonDetails, 5 * 60 * 1000);
        
        setData(pokemonDetails);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch Pokemon list';
        setError(errorMessage);
        console.error('Error fetching Pokemon list:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, [limit]);

  return { data, loading, error };
}; 