import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {

    primary: {
      main: '#6366F1',
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
      default: '#0F172A',
      paper: '#1E293B',
    },

    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8',
    },
  }
});

export default theme;
