import {
  Container,
  ErrorContainer,
  LoaderContainer,
  Wrapper,
  Section,
  Main,
} from '@/pages/DashboardPage/DashboardPage.styles.ts';
import { useFetchDashboard } from '@/hooks/useFetchDashboard.ts';
import Stats from '@/components/Stats/Stats.tsx';
import RevenueChart from '@/components/RevenueChart/RevenueChart.tsx';
import WeeklyActivityChart from '@/components/WeeklyActivity/WeeklyActivityChart.tsx';
import { CircularProgress } from '@mui/material';
import Header from '@/components/Header/Header.tsx';
import { useState } from 'react';
import type { TimeRange } from '@/types/types.ts';
import { useDashboardMetrics } from '@/hooks/useDashboardMetrics.ts';
import TimeRangeSwitcher from '@/components/TimeRangeSwitcher/TimeRangeSwitcher.tsx';
import { Transactions } from '@/components/Transactions/Transactions.tsx';
import { useIsMobile } from '@/hooks/useIsMobile.ts';

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState<TimeRange>('30D');
  const state = useFetchDashboard();
  const isDataLoading = state.status === 'loading';
  const isMobile = useIsMobile();
  const isTooSmall = useIsMobile(405);

  const metrics = state.status === 'success' ? state.data.metrics : [];

  const {
    chartData,
    totalRevenue,
    totalUsers,
    currentActive,
    engagement,
    conversion,
    revenueComparison,
  } = useDashboardMetrics(metrics, timeRange);

  if (isTooSmall) {
    return <LoaderContainer>Please use a bigger screen for the best experience.</LoaderContainer>;
  }

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
    <Wrapper isMobile={isMobile}>
      <Header />
      <TimeRangeSwitcher value={timeRange} onChange={setTimeRange} />
      <Container isMobile={isMobile}>
        <Main>
          <Section>
            <RevenueChart chartData={chartData} timeRange={timeRange} />
          </Section>
          <Section isMobile={isMobile}>
            <Stats
              totalRevenue={totalRevenue}
              totalUsers={totalUsers}
              currentActive={currentActive}
              conversion={conversion}
              engagement={engagement}
              revenueComparison={revenueComparison}
              timeRange={timeRange}
            />
            <WeeklyActivityChart weeklyActivity={state.data.weeklyActivity} />
          </Section>
        </Main>

        <Transactions transactions={state.data.transactions} />
      </Container>
    </Wrapper>
  );
}
