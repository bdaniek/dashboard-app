import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend, Cell } from 'recharts';
import { Wrapper, Title } from '@/components/UsersSourceChart/UsersSourceChart.styles.ts';
import { usersSourceColors } from '@/utils/theme.ts';

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
            label={({ name, percent }) =>
              `${name}: ${percent != null ? (percent * 100).toFixed(1) : '0.0'}%`
            }
          >
            {usersBySource.map((_, index) => (
              <Cell key={index} fill={usersSourceColors[index % usersSourceColors.length]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(
              value: number,
              name: string,
              props: { payload: { percentage: number } },
            ) => {
              const percentage = props.payload.percentage;
              return [`${value} (${percentage.toFixed(1)}%)`, name];
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default UserSourceChart;
