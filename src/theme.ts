import { createTheme } from '@mui/material/styles';

// Kolory typów Pokemonów
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
      fontWeight: 600, // Zmniejszone z 700 na 600
    },
    h2: {
      fontWeight: 500, // Zmniejszone z 600 na 500
    },
    h3: {
      fontWeight: 500, // Zmniejszone z 600 na 500
    },
    h4: {
      fontWeight: 400, // Zmniejszone z 500 na 400
    },
    h5: {
      fontWeight: 400, // Zmniejszone z 500 na 400
    },
    h6: {
      fontWeight: 400, // Zmniejszone z 500 na 400
    },
    body1: {
      fontWeight: 300, // Zmniejszone z 400 na 300
    },
    body2: {
      fontWeight: 300, // Zmniejszone z 400 na 300
    },
    button: {
      fontWeight: 400, // Zmniejszone z 500 na 400
      textTransform: 'none', // Usuwa automatyczne wielkie litery
    },
  },
  palette: {
    primary: {
      main: '#3b4cca', // Główny kolor Pokemon
    },
    secondary: {
      main: '#e0e7ff', // Kolor dla abilities
    },
    background: {
      default: '#f6f8fc', // Tło aplikacji
      paper: '#f3f4f6', // Tło dla statystyk
    },
    text: {
      primary: '#222', // Główny kolor tekstu
      secondary: '#444', // Drugorzędny kolor tekstu
    },
    error: {
      main: '#C03028', // Kolor błędów (fighting type)
    },
    success: {
      main: '#78C850', // Kolor sukcesu (grass type)
    },
    warning: {
      main: '#F08030', // Kolor ostrzeżeń (fire type)
    },
    info: {
      main: '#6890F0', // Kolor informacji (water type)
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