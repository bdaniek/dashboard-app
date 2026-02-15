import { Container, StyledInput, Button, Information, Title, Wrapper } from './LoginPage.styles.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext.tsx';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
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
      <Container>
        <Title>Log In</Title>
        <div>{error}</div>
        <form onSubmit={handleLogin}>
          <StyledInput
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            disabled={isLoading}
          />

          <StyledInput
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            disabled={isLoading}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={isLoading}
            sx={{ mt: 3, py: 1.5 }}
          >
            {isLoading ? 'Loading...' : 'Sign In'}
          </Button>
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
