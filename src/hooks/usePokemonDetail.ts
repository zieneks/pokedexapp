import { useState, useEffect } from 'react';
import { PokemonDetail } from '../types';
import { getCache, setCache } from '../utils/cache';

export const usePokemonDetail = (id: string) => {
  const [data, setData] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonDetail = async (): Promise<void> => {
      if (!id) {
        setLoading(false);
        return;
      }

      const cacheKey = `pokemon-detail-${id}`;
      
      const cached = getCache<PokemonDetail>(cacheKey);
      if (cached) {
        setData(cached);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json: PokemonDetail = await response.json();
        
        setCache(cacheKey, json, 10 * 60 * 1000);
        
        setData(json);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch Pokemon details';
        setError(errorMessage);
        console.error('Error fetching Pokemon details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [id]);

  return { data, loading, error };
}; 