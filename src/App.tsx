import { CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './utils/theme.ts';
import { AppRoutes } from '@/AppRoutes.tsx';
import { AuthProvider } from '@/context/AuthContext.tsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <StyledThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <GlobalStyle />
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </StyledThemeProvider>
    </AuthProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.palette.background.default};
  }
`;
