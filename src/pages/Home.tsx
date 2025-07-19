import React, { useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';
import Loader from '../components/Loader';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Home: React.FC = () => {
    const [pokemonData, setPokemonData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const onSearch = (term: string) => {
        setSearchTerm(term.toLowerCase());
    };

    const filteredPokemon = pokemonData.filter(pokemon =>
        pokemon.name.toLowerCase().startsWith(searchTerm)
    );
    

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=60');
                if (!response.ok) {
                    throw new Error('Failed to fetch Pokémon data');
                }
                const data = await response.json();
                const detailedData = await Promise.all(
                    data.results.map(async (pokemon: { name: string }) => {
                        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                        return await res.json();
                    })
                );
                setPokemonData(detailedData);
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
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
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
                <PokemonList pokemons={filteredPokemon} loading={loading} error={error} />
            )}
        </Box>
    );
};

export default Home;