import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { colors } from './theme/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      light: colors.secondary,
      dark: colors.text,
    },
    secondary: {
      main: colors.secondary,
      light: colors.accent,
      dark: colors.primary,
    },
    background: {
      default: colors.background,
      paper: colors.white,
    },
    text: {
      primary: colors.text,
      secondary: colors.primary,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: colors.primary,
      fontWeight: 700,
    },
    h2: {
      color: colors.primary,
      fontWeight: 600,
    },
    h3: {
      color: colors.primary,
      fontWeight: 600,
    },
    h4: {
      color: colors.text,
      fontWeight: 500,
    },
    h5: {
      color: colors.text,
      fontWeight: 500,
    },
    h6: {
      color: colors.text,
      fontWeight: 500,
    },
    body1: {
      color: colors.text,
    },
    body2: {
      color: colors.text,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          textTransform: 'none',
          fontWeight: 500,
          '&:hover': {
            transform: 'translateY(-2px)',
            transition: 'all 0.3s ease',
          },
        },
        contained: {
          backgroundColor: colors.secondary,
          color: colors.white,
          '&:hover': {
            backgroundColor: colors.primary,
          },
        },
        outlined: {
          borderColor: colors.secondary,
          color: colors.secondary,
          '&:hover': {
            borderColor: colors.primary,
            backgroundColor: colors.hover,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background,
          boxShadow: 'none',
          borderBottom: `1px solid ${colors.hover}`,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;