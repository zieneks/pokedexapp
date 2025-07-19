import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
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

interface PokemonCardProps {
    pokemon: Pokemon;
    onClick?: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const { name, sprites, types } = pokemon;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/pokemon/${name}`);
    };

    const mainType = types && types.length > 0 ? types[0].type.name : 'normal';
    const bgColor = typeColors[mainType] || '#A8A878';
    const cardBgColor = `${bgColor}33`;

    return (
        <Card
            onClick={handleClick}
            sx={{
                cursor: 'pointer',
                background: `linear-gradient(135deg, ${cardBgColor} 60%, #fff 100%)`,
                color: '#222',
                borderRadius: 4,
                p: 2,
                mb: 2,
                textAlign: 'center',
                boxShadow: 4,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                    transform: 'scale(0.99)',
                    boxShadow: 8,
                },
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                <Box
                    component="img"
                    src={sprites.front_default}
                    alt={name}
                    sx={{
                        width: 96,
                        height: 96,
                        background: '#f6f8fc',
                        borderRadius: '50%',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        border: `2px solid ${bgColor}`,
                        objectFit: 'contain',
                    }}
                />
            </Box>
            <CardContent sx={{ p: 0 }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 700, textTransform: 'capitalize', mb: 1 }}>
                    {name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 1 }}>
                    {types.map((t) => (
                        <Chip
                            key={t.type.name}
                            label={t.type.name}
                            sx={{
                                background: typeColors[t.type.name] || '#A8A878',
                                color: '#fff',
                                fontWeight: 500,
                                textTransform: 'capitalize',
                            }}
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;