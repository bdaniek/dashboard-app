import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Wrapper, Title } from '@/components/RevenueChart/RevenueChart.styles.ts';
import theme from '@/utils/theme.ts';

interface RevenueChartProps {
  revenue: {
    month: string;
    revenue: number;
  }[];
}

const RevenueChart = ({ revenue }: RevenueChartProps) => {
  return (
    <Wrapper>
      <Title>Monthly Revenue</Title>

      <ResponsiveContainer width="100%">
        <LineChart data={revenue} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={theme.palette.primary.main} stopOpacity={0.4} />
              <stop offset="95%" stopColor={theme.palette.primary.main} stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="4 4" stroke={theme.palette.divider} vertical={false} />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />

          <Tooltip
            formatter={(value: number | undefined) => [`$${value?.toLocaleString()}`, 'Revenue']}
            contentStyle={{
              background: theme.palette.background.paper,
              border: 'none',
              borderRadius: 12,
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            }}
            cursor={{ stroke: theme.palette.primary.main, strokeWidth: 1 }}
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke={theme.palette.primary.main}
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 6,
              strokeWidth: 2,
              stroke: theme.palette.background.paper,
            }}
            fill="url(#revenueGradient)"
          />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default RevenueChart;
