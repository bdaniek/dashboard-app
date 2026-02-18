import { Container, ErrorContainer, LoaderContainer, Wrapper } from './DashboardPage.styles.ts';
import { useFetchDashboard } from '@/hooks/useFetchDashboard.ts';
import Stats from '@/components/Stats/Stats.tsx';
import Todos from '@/components/Todos/Todos.tsx';
import RevenueChart from '@/components/RevenueChart/RevenueChart.tsx';
import UserSourceChart from '@/components/UsersSourceChart/UsersSourceChart.tsx';
import WeeklyActivityChart from '@/components/WeeklyActivity/WeeklyActivityChart.tsx';
import ActivityFeed from '@/components/ActivityFeed/ActivityFeed.tsx';
import { CircularProgress } from '@mui/material';
import Header from '@/components/Header/Header.tsx';

export default function DashboardPage() {
  const state = useFetchDashboard();
  const isDataLoading = state.status === 'loading';

  if (isDataLoading) {
    return (
      <LoaderContainer>
        <CircularProgress />
      </LoaderContainer>
    );
  }

  if (state.status === 'error') {
    return <ErrorContainer>{state.error}</ErrorContainer>;
  }

  return (
    <Wrapper>
      <Header />
      <Container>
        <Stats {...state.data.stats} />
        <RevenueChart revenue={state.data.revenue} />
        <Todos todos={state.data.todos} />
      </Container>
      <Container>
        <WeeklyActivityChart weeklyActivity={state.data.weeklyActivity} />
        <UserSourceChart usersBySource={state.data.usersBySource} />
        <ActivityFeed />
      </Container>
    </Wrapper>
  );
}
