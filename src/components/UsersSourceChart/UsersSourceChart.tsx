import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend, Cell } from 'recharts';
import { Wrapper, Title } from '@/components/UsersSourceChart/UsersSourceChart.styles.ts';

const COLORS = ['#ff7a3d', '#ff5e57', '#ff3e6e', '#d63ea8', '#8c3ebf'];

interface UserSourceChartProps {
  usersBySource: {
    source: string;
    count: number;
    percentage: number;
  }[];
}

const UserSourceChart = ({ usersBySource }: UserSourceChartProps) => {
  return (
    <Wrapper>
      <Title>Users by Source</Title>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={usersBySource}
            dataKey="count"
            nameKey="source"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={3}
          >
            {usersBySource.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default UserSourceChart;
