import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { PokemonDetail as PokemonDetailType } from '../types';
import { useTheme } from '@mui/material/styles';
import { pokemonTypeColors } from '../theme';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

interface PokemonDetailProps {
    pokemon: PokemonDetailType;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon }) => {
    const navigate = useNavigate();
    const theme = useTheme();

    const mainType = pokemon.types && pokemon.types.length > 0 ? pokemon.types[0].type.name : 'normal';
    const bgColor = pokemonTypeColors[mainType as keyof typeof pokemonTypeColors] || pokemonTypeColors.normal;
    const cardBgColor = `${bgColor}33`; 

    return (
        <Card
            sx={{
                maxWidth: 400,
                margin: '40px auto',
                background: `linear-gradient(135deg, ${cardBgColor} 60%, #fff 100%)`,
                borderRadius: 4,
                boxShadow: 4,
                textAlign: 'center',
                p: 3,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1 }}>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => navigate('/')}
                >
                    Back
                </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    style={{
                        border: `2px solid ${bgColor}`,
                        background: theme.palette.background.default,
                        borderRadius: '50%',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        width: '160px',
                        height: '160px',
                        objectFit: 'contain',
                    }}
                />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700, textTransform: 'capitalize', mb: 2 }}>
                {pokemon.name}
            </Typography>

            <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 1 }}>Types</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
                {pokemon.types.map((type, index) => (
                    <Chip
                        key={`${pokemon.name}-type-${type.type.name}-${index}`}
                        label={type.type.name}
                        sx={{
                            background: pokemonTypeColors[type.type.name as keyof typeof pokemonTypeColors] || pokemonTypeColors.normal,
                            color: '#fff',
                        }}
                    />
                ))}
            </Box>

            <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 1 }}>Abilities</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 2 }}>
                {pokemon.abilities.map((ability, index) => (
                    <Chip
                        key={`${pokemon.name}-ability-${ability.ability.name}-${index}`}
                        label={ability.ability.name}
                        sx={{
                            background: theme.palette.secondary.main,
                            color: theme.palette.text.primary,
                        }}
                    />
                ))}
            </Box>

            <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 1 }}>Stats</Typography>
            <Box component="ul" sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1,
                listStyle: 'none',
                p: 0,
                m: 0,
                mb: 1,
            }}>
                {pokemon.stats.map((stat, index) => (
                    <Box component="li" key={`${pokemon.name}-stat-${stat.stat.name}-${index}`} sx={{
                        background: theme.palette.background.paper,
                        borderRadius: 1,
                        p: 1,
                        fontSize: '0.98rem',
                        color: theme.palette.text.secondary,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        whiteSpace: 'nowrap',
                    }}>
                        <span style={{ fontWeight: 500 }}>{stat.stat.name}:</span>
                        <span style={{ fontWeight: 600, color: theme.palette.primary.main }}>{stat.base_stat}</span>
                    </Box>
                ))}
            </Box>
        </Card>
    );
};

export default PokemonDetail;