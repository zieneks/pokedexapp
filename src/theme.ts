import { createTheme } from '@mui/material/styles';

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
    background: {
      default: '#f6f8fc',
    },
  },
}); 