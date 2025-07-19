import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetail from '../components/PokemonDetail';
import Loader from '../components/Loader';

const Pokemon: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [pokemonData, setPokemonData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch Pokémon data');
                }
                const data = await response.json();
                setPokemonData(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError(String(err));
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [name]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {pokemonData && <PokemonDetail pokemon={pokemonData} />}
        </div>
    );
};

export default Pokemon;