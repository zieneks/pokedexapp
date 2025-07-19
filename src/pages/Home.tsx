import React, { useState } from 'react';
import PokemonList from '../components/PokemonList';
import Loader from '../components/Loader';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { usePokemonQuery } from '../hooks/usePokemonQuery';
import { Pokemon } from '../types';

const Home: React.FC = () => {
    const { data: pokemonData = [], isLoading: loading, error, refetch } = usePokemonQuery();
    const [searchTerm, setSearchTerm] = useState('');

    const onSearch = (term: string) => {
        setSearchTerm(term.toLowerCase());
    };

    const filteredPokemon = pokemonData.filter((pokemon: Pokemon) =>
        pokemon.name.toLowerCase().startsWith(searchTerm)
    );

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography color="error" sx={{ mb: 2 }}>
                    Error: {error.message}
                </Typography>
                <Button variant="contained" onClick={() => refetch()}>
                    Try Again
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ px: { xs: 1, sm: 2, md: 4 }, py: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                <Typography
                    component="h1"
                    sx={{
                        m: 0,
                        fontWeight: 700,
                        color: '#3b4cca',
                        fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem' },
                        textAlign: { xs: 'center', sm: 'left' },
                        letterSpacing: 1,
                    }}
                >
                    Pokedex
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Search for Pokémon"
                    variant="outlined"
                    value={searchTerm}
                    onChange={e => onSearch(e.target.value)}
                    sx={{ minWidth: 220 }}
                />
            </Box>
            {filteredPokemon.length === 0 ? (
                <Typography variant="h6" sx={{ color: 'red', textAlign: 'center', mt: 4 }}>
                    Pokemon not found. Try a different search term.
                </Typography>
            ) : (
                <PokemonList pokemons={filteredPokemon} loading={loading} error={null} />
            )}
        </Box>
    );
};

export default Home;