import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetail from '../components/PokemonDetail';
import Loader from '../components/Loader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { usePokemonDetailQuery } from '../hooks/usePokemonDetailQuery';

const Pokemon: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const { data: pokemonData, isLoading: loading, error } = usePokemonDetailQuery(name || '');

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography color="error">
                    Error: {error.message}
                </Typography>
            </Box>
        );
    }

    return (
        <div>
            {pokemonData && <PokemonDetail pokemon={pokemonData} />}
        </div>
    );
};

export default Pokemon;