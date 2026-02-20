import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { Wrapper, Title } from '@/components/WeeklyActivity/WeeklyActivityChart.styles.ts';
import { weeklyActivityColors } from '@/utils/theme.ts';

interface WeeklyActivityChartProps {
  weeklyActivity: {
    day: string;
    visits: number;
  }[];
}

const WeeklyActivityChart = ({ weeklyActivity }: WeeklyActivityChartProps) => {
  const totalVisits = weeklyActivity.reduce((acc, cur) => acc + cur.visits, 0);

  return (
    <Wrapper>
      <Title>Weekly Activity</Title>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={weeklyActivity}
            dataKey="visits"
            nameKey="day"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={120}
            paddingAngle={4}
            cornerRadius={10}
            label={({ name, percent }) =>
              `${name}: ${percent != null ? (percent * 100).toFixed(1) : '0.0'}%`
            }
          >
            {weeklyActivity.map((_, index) => (
              <Cell key={index} fill={weeklyActivityColors[index % weeklyActivityColors.length]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(value: number | undefined, name: string | undefined): [string, string] => {
              return [`${value ?? 0} visits`, name ?? 'Day'];
            }}
            contentStyle={{
              border: 'none',
              borderRadius: 14,
              boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
              color: 'white',
            }}
          />

          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: 24, fontWeight: 600, fill: 'black' }}
            dy={-6}
          >
            {totalVisits}
          </text>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: 12, fill: 'black' }}
            dy={16}
          >
            total visits
          </text>
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default WeeklyActivityChart;
