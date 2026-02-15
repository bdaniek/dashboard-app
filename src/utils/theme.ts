import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
  palette: {
    primary: {
      main: '#f05aa0',
    },

    secondary: {
      main: '#FF8C42',
    },

    success: {
      main: '#22C55E',
    },

    warning: {
      main: '#F59E0B',
    },

    error: {
      main: '#EF4444',
    },

    info: {
      main: '#38BDF8',
    },

    background: {
      default: '#eeece8',
      paper: '#1E293B',
    },

    text: {
      primary: '#000',
      secondary: '#94A3B8',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B6B 50%, #E91E63 100%)',
          color: 'white',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: 'white',
          background: 'linear-gradient(135deg, #FF8C42 0%, #f05aa0 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #FF6B6B 0%, #E91E63 100%)',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '20px !important',
        },
      },
    },
  },
});

export default theme;
