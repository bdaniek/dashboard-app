import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

export const users = [
  {
    id: '1',
    email: 'john@example.com',
    name: 'John Doe',
    password: '123',
  },
];

export const dashboard = {
  stats: {
    totalRevenue: 45231.89,
    totalUsers: 8429,
    engagement: 64.2,
    conversion: 3.24,
  },
  revenue: [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 2000 },
    { month: 'Apr', revenue: 2780 },
    { month: 'May', revenue: 1890 },
    { month: 'Jun', revenue: 2390 },
    { month: 'Jul', revenue: 3490 },
  ],
  todos: [
    { id: '1', title: 'Update dashboard', priority: 'high', assignedTo: 'Alice Johnson' },
    { id: '2', title: 'Fix mobile', priority: 'medium', assignedTo: 'Bob Smith' },
    { id: '3', title: 'Review analytics report', priority: 'high', assignedTo: 'Carol Lee' },
    { id: '4', title: 'Setup API integration', priority: 'high', assignedTo: 'David Kim' },
    { id: '5', title: 'Update documentation', priority: 'low', assignedTo: 'Eve Martinez' },
    { id: '6', title: 'Performance optimization', priority: 'high', assignedTo: 'Frank Brown' },
    { id: '7', title: 'Test payment gateway', priority: 'high', assignedTo: 'Grace Wilson' },
    { id: '8', title: 'Update user guides', priority: 'medium', assignedTo: 'Hector Garcia' },
  ],
  usersBySource: [
    { source: 'Organic', count: 2500, percentage: 30 },
    { source: 'Direct', count: 1800, percentage: 22 },
    { source: 'Social', count: 2100, percentage: 25 },
    { source: 'Referral', count: 1030, percentage: 12 },
    { source: 'Email', count: 1000, percentage: 11 },
  ],
  weeklyActivity: [
    { day: 'Mon', visits: 340 },
    { day: 'Tue', visits: 450 },
    { day: 'Wed', visits: 380 },
    { day: 'Thu', visits: 520 },
    { day: 'Fri', visits: 680 },
    { day: 'Sat', visits: 250 },
    { day: 'Sun', visits: 190 },
  ],
  activityFeed: [
    { id: '1', user: 'John Smith', action: 'Uploaded report', timestamp: '2024-02-13T10:30:00Z' },
    {
      id: '2',
      user: 'Sarah Johnson',
      action: 'Shared dashboard',
      timestamp: '2024-02-13T09:15:00Z',
    },
    {
      id: '3',
      user: 'Mike Chen',
      action: 'Completed task: Review Q1 metrics',
      timestamp: '2024-02-13T08:45:00Z',
    },
    {
      id: '4',
      user: 'Emma Wilson',
      action: 'Updated user preferences',
      timestamp: '2024-02-13T07:30:00Z',
    },
    {
      id: '5',
      user: 'David Brown',
      action: 'Added new integration',
      timestamp: '2024-02-13T06:20:00Z',
    },
    {
      id: '6',
      user: 'Lisa Anderson',
      action: 'Exported analytics report',
      timestamp: '2024-02-13T05:10:00Z',
    },
    {
      id: '7',
      user: 'Tom Martinez',
      action: 'Started new campaign',
      timestamp: '2024-02-13T04:00:00Z',
    },
    {
      id: '8',
      user: 'Jessica Lee',
      action: 'Reviewed code changes',
      timestamp: '2024-02-13T03:45:00Z',
    },
    {
      id: '9',
      user: 'Robert Taylor',
      action: 'Updated team documentation',
      timestamp: '2024-02-13T02:30:00Z',
    },
    {
      id: '10',
      user: 'Amanda White',
      action: 'Scheduled meeting with stakeholders',
      timestamp: '2024-02-13T01:15:00Z',
    },
    {
      id: '11',
      user: 'Kevin Harris',
      action: 'Fixed critical bug',
      timestamp: '2024-02-12T23:45:00Z',
    },
    {
      id: '12',
      user: 'Nancy Clark',
      action: 'Deployed to production',
      timestamp: '2024-02-12T22:30:00Z',
    },
  ],
};

dotenv.config();

const app = express();
const PORT = 5001;

app.use(
  cors({
    origin: '*',
  }),
);
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ user: { id: user.id, email: user.email, name: user.name } });
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/api/dashboard', (req, res) => {
  res.json(dashboard);
});

app.get('/test', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
