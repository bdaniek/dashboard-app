import {
  Wrapper,
  Divider,
  PerformanceSection,
  RevenueSection,
  UserSection,
  MetricBlock,
  Label,
  Value,
  Comparison,
} from '@/components/Stats/Stats.styles.ts';
import type { TimeRange } from '@/types/types.ts';

interface StatsProps {
  totalRevenue: number;
  totalUsers: number;
  currentActive: number;
  engagement: number;
  conversion: number;
  revenueComparison: string;
  timeRange: TimeRange;
}

const Stats = ({
  totalRevenue,
  totalUsers,
  currentActive,
  engagement,
  conversion,
  revenueComparison,
  timeRange,
}: StatsProps) => {
  const formattedRevenue = `$${totalRevenue.toLocaleString()}`;

  return (
    <Wrapper>
      <RevenueSection>
        <Label>Total revenue</Label>
        <Value>{formattedRevenue}</Value>
        <Comparison isPositive={revenueComparison.startsWith('+')}>
          {timeRange === '1Y' ? '' : revenueComparison}
        </Comparison>
      </RevenueSection>

      <UserSection>
        <MetricBlock>
          <Label>Total users</Label>
          <Value>{totalUsers}</Value>
        </MetricBlock>

        <Divider></Divider>

        <MetricBlock>
          <Label>Active users</Label>
          <Value>{currentActive}</Value>
        </MetricBlock>
      </UserSection>

      <PerformanceSection>
        <Label>{`Engagement Rate: ${engagement}%`}</Label>
        <Label>{`Conversion Rate: ${conversion}%`}</Label>
      </PerformanceSection>
    </Wrapper>
  );
};

export default Stats;
