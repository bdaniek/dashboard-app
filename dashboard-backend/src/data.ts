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
    { id: '3', title: 'Review analytics report', priority: 'low', assignedTo: 'Carol Lee' },
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
};
