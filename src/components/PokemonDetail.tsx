import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { PokemonDetail as PokemonDetailType } from '../types';


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
    const typeColors: { [key: string]: string } = {
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        psychic: '#F85888',
        ice: '#98D8D8',
        dragon: '#7038F8',
        dark: '#705848',
        fairy: '#EE99AC',
        normal: '#A8A878',
        fighting: '#C03028',
        flying: '#A890F0',
        poison: '#A040A0',
        ground: '#E0C068',
        rock: '#B8A038',
        bug: '#A8B820',
        ghost: '#705898',
        steel: '#B8B8D0'
    };

    const mainType = pokemon.types && pokemon.types.length > 0 ? pokemon.types[0].type.name : 'normal';
    const bgColor = typeColors[mainType] || '#A8A878';
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
                        background: '#f6f8fc',
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

            <Typography variant="h6" sx={{ color: '#3b4cca', mb: 1 }}>Types</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
                {pokemon.types.map((type) => (
                    <Chip
                        key={type.type.name}
                        label={type.type.name}
                        sx={{
                            background: typeColors[type.type.name] || '#A8A878',
                            color: '#fff',
                            fontWeight: 500,
                            textTransform: 'capitalize',
                        }}
                    />
                ))}
            </Box>

            <Typography variant="h6" sx={{ color: '#3b4cca', mb: 1 }}>Abilities</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 2 }}>
                {pokemon.abilities.map((ability) => (
                    <Chip
                        key={ability.ability.name}
                        label={ability.ability.name}
                        sx={{
                            background: '#e0e7ff',
                            color: '#222',
                            fontWeight: 500,
                            textTransform: 'capitalize',
                        }}
                    />
                ))}
            </Box>

            <Typography variant="h6" sx={{ color: '#3b4cca', mb: 1 }}>Stats</Typography>
            <Box component="ul" sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1,
                listStyle: 'none',
                p: 0,
                m: 0,
                mb: 1,
            }}>
                {pokemon.stats.map((stat) => (
                    <Box component="li" key={stat.stat.name} sx={{
                        background: '#f3f4f6',
                        borderRadius: 1,
                        p: 1,
                        fontSize: '0.98rem',
                        color: '#444',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        whiteSpace: 'nowrap',
                    }}>
                        <span style={{ fontWeight: 500 }}>{stat.stat.name}:</span>
                        <span style={{ fontWeight: 600, color: '#3b4cca' }}>{stat.base_stat}</span>
                    </Box>
                ))}
            </Box>
        </Card>
    );
};

export default PokemonDetail;