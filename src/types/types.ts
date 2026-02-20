export interface Metric {
  date: string;
  revenue: number;
  users: number;
  active: number;
  conversions: number;
}

export interface Transaction {
  id: string;
  user: string;
  amount: number;
  status: 'paid' | 'refunded' | 'failed';
  paymentMethod: 'visa' | 'mastercard' | 'paypal';
  createdAt: string;
}

export interface DashboardMetrics {
  chartData: { date: string; revenue: number }[];
  totalRevenue: number;
  totalUsers: number;
  currentActive: number;
  engagement: number;
  conversion: number;
  revenueComparison: string;
}

export type TimeRange = '7D' | '30D' | '90D' | '1Y';

export const TIME_RANGES: TimeRange[] = ['7D', '30D', '90D', '1Y'];
