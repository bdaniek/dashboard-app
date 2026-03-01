import {
  Container,
  LoginButton,
  Information,
  Title,
  Wrapper,
  ErrorContainer,
} from '@/pages/LoginPage/LoginPage.styles.ts';
import { type SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext.tsx';
import { TextField } from '@mui/material';
import Carousel from '@/components/Carousel/Carousel.tsx';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <Wrapper>
      <Carousel />
      <Container>
        <Title>Log In</Title>
        <ErrorContainer>{error}</ErrorContainer>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            disabled={isLoading}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            disabled={isLoading}
          />

          <LoginButton
            fullWidth
            variant="contained"
            type="submit"
            disabled={isLoading}
            sx={{ mt: 3, py: 1.5 }}
          >
            {isLoading ? 'Loading...' : 'Sign In'}
          </LoginButton>
        </form>
      </Container>
      <Information>
        <div>Log in with these credentials:</div>
        <div>email: john@example.com</div>
        <div>password: 123</div>
      </Information>
    </Wrapper>
  );
}
