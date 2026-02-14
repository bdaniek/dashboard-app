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
    { id: '1', title: 'Update dashboard', completed: false, priority: 'high' },
    { id: '2', title: 'Fix mobile', completed: true, priority: 'medium' },
  ],
  usersBySource: [
    { source: 'Organic', count: 2500, percentage: 30 },
    { source: 'Direct', count: 1800, percentage: 22 },
  ],
  weeklyActivity: [
    { day: 'Mon', visits: 340 },
    { day: 'Tue', visits: 450 },
  ],
  activityFeed: [
    { id: '1', user: 'John Smith', action: 'Uploaded report', timestamp: '2024-02-13T10:30:00Z' },
    {
      id: '2',
      user: 'Sarah Johnson',
      action: 'Shared dashboard',
      timestamp: '2024-02-13T09:15:00Z',
    },
  ],
};
