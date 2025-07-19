import React from 'react';
import { Pokemon } from '../types';
import PokemonCard from './PokemonCard';
import Loader from './Loader';
import Box from '@mui/material/Box';

interface PokemonListProps {
    pokemons: Pokemon[];
    loading: boolean;
    error: string | null;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, loading, error }) => {
    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: '1fr 1fr',
                    md: '1fr 1fr 1fr',
                },
                gap: 3,
                justifyContent: 'center',
                alignItems: 'stretch',
                px: { xs: 1, sm: 2, md: 4 },
                py: 2,
            }}
        >
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </Box>
    );
};

export default PokemonList;