// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A2540',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3E92CC',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#333',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif', // Match Tailwind default
  },
});

export default theme;
