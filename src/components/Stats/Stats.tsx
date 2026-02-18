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
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

interface StatsProps {
  totalRevenue: number;
  totalUsers: number;
  currentActive: number;
  engagement: number;
  conversion: number;
}

const Stats = ({ totalRevenue, totalUsers, currentActive, engagement, conversion }: StatsProps) => {
  const formattedRevenue = `$${totalRevenue.toLocaleString()}`;

  return (
    <Wrapper>
      <RevenueSection>
        <Label>Total revenue</Label>
        <Value>{formattedRevenue}</Value>
      </RevenueSection>

      <UserSection>
        <MetricBlock>
          <Label>Total users</Label>
          <Value>{totalUsers}</Value>
        </MetricBlock>

        <Divider></Divider>

        <MetricBlock>
          <Label>Currently active users</Label>
          <Value>{currentActive}</Value>
        </MetricBlock>
      </UserSection>

      <PerformanceSection>
        <Label>
          {`Engagement Rate: ${engagement}% +4.2%`}
          <NorthIcon color="success" />
        </Label>
        <Label>
          {`Conversion Rate: ${conversion}% -2.7%`}
          <SouthIcon color="error" />
        </Label>
      </PerformanceSection>
    </Wrapper>
  );
};

export default Stats;
