import { Container, Wrapper } from './DashboardPage.styles.ts';
import { useFetchDashboard } from '@/hooks/useFetchDashboard.ts';
import Stats from '@/components/Stats/Stats.tsx';
import Todos from '@/components/Todos/Todos.tsx';

export default function DashboardPage() {
  const state = useFetchDashboard();
  const isLoading = state.status === 'loading';

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (state.status === 'error') {
    return <div>Error: {state.error}</div>;
  }
  return (
    <Wrapper>
      <Container>
        <Stats {...state.data.stats} isLoading={isLoading} />
        <Todos todos={state.data.todos} />
      </Container>
      <Container>s</Container>
    </Wrapper>
  );
}
