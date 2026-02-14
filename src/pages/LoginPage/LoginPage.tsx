import { useFetchDashboard } from '@/hooks/useFetchDashboard.ts';
import { Container } from './LoginPage.styles.ts';

export default function LoginPage() {
  const { data } = useFetchDashboard();
  return (
    <>
      <Container>login</Container>
    </>
  );
}
