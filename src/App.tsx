import { CssBaseline, ThemeProvider } from '@mui/material';
import { createGlobalStyle } from 'styled-components';
import theme from './utils/theme.ts';
import { AppRoutes } from '@/components/AppRoutes.tsx';
import { AuthProvider } from '@/context/AuthContext.tsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <GlobalStyle />
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
   display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    height: 100vh;
  }
`;
