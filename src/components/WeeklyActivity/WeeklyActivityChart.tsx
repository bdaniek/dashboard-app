import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';
import { Wrapper, Title } from '@/components/WeeklyActivity/WeeklyActivityChart.styles.ts';

interface WeeklyActivityChartProps {
  weeklyActivity: {
    day: string;
    visits: number;
  }[];
}

const COLORS = ['#ff7a3d', '#ff5e57', '#ff3e6e', '#d63ea8', '#8c3ebf', '#4c6ef5', '#38bdf8'];

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
          >
            {weeklyActivity.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
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

          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{ marginTop: 16, fontSize: 12, color: '#94a3b8' }}
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
