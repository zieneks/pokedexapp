import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../types';
import { useTheme } from '@mui/material/styles';
import { pokemonTypeColors } from '../theme';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

interface PokemonCardProps {
    pokemon: Pokemon;
    onClick?: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const { name, sprites, types } = pokemon;
    const navigate = useNavigate();
    const theme = useTheme();

    const handleClick = () => {
        navigate(`/pokemon/${name}`);
    };

    const mainType = types && types.length > 0 ? types[0].type.name : 'normal';
    const bgColor = pokemonTypeColors[mainType as keyof typeof pokemonTypeColors] || pokemonTypeColors.normal;
    const cardBgColor = `${bgColor}33`;

    return (
        <Card
            onClick={handleClick}
            sx={{
                cursor: 'pointer',
                background: `linear-gradient(135deg, ${cardBgColor} 60%, #fff 100%)`,
                color: theme.palette.text.primary,
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
                        background: theme.palette.background.default,
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
                                background: pokemonTypeColors[t.type.name as keyof typeof pokemonTypeColors] || pokemonTypeColors.normal,
                                color: '#fff',
                            }}
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;