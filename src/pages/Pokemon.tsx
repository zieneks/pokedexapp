import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetail from '../components/PokemonDetail';
import Loader from '../components/Loader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { usePokemonDetail } from '../hooks/usePokemonDetail';

const Pokemon: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const { data: pokemonData, loading, error } = usePokemonDetail(name || '');

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography color="error">
                    Error: {error}
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