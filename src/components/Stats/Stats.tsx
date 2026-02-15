import {
  Wrapper,
  Divider,
  PerformanceSection,
  RevenueSection,
  UserSection,
  MetricBlock,
  Label,
  Value,
} from '@/components/Stats/Stats.styles.ts';

interface StatsProps {
  totalRevenue: number;
  totalUsers: number;
  engagement: number;
  conversion: number;
  isLoading: boolean;
}

const Stats = ({ totalRevenue, totalUsers, engagement, conversion }: StatsProps) => {
  return (
    <Wrapper>
      <RevenueSection>
        <Label>Total revenue</Label>
        <Value>{`${totalRevenue} PLN`}</Value>
      </RevenueSection>

      <UserSection>
        <MetricBlock>
          <Label>Total users</Label>
          <Value>{totalUsers}</Value>
        </MetricBlock>

        <Divider></Divider>

        <MetricBlock>
          <Label>Currently active users</Label>
          <Value>{214}</Value>
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
