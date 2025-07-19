import { createTheme } from '@mui/material/styles';

export const pokemonTypeColors = {
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
} ;

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 600, 
    },
    h2: {
      fontWeight: 500, 
    },
    h3: {
      fontWeight: 500, 
    },
    h4: {
      fontWeight: 400, 
    },
    h5: {
      fontWeight: 400, 
    },
    h6: {
      fontWeight: 400, 
    },
    body1: {
      fontWeight: 300, 
    },
    body2: {
      fontWeight: 300, 
    },
    button: {
      fontWeight: 400, 
      textTransform: 'none', 
    },
  },
  palette: {
    primary: {
      main: '#3b4cca', 
    },
    secondary: {
      main: '#e0e7ff', 
    },
    background: {
      default: '#f6f8fc', 
      paper: '#f3f4f6', 
    },
    text: {
      primary: '#222', 
      secondary: '#444', 
    },
    error: {
      main: '#C03028', 
    },
    success: {
      main: '#78C850', 
    },
    warning: {
      main: '#F08030', 
    },
    info: {
      main: '#6890F0', 
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: 'capitalize',
        },
      },
    },
  },
}); 