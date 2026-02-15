import { useState, useEffect } from 'react';
import { getDashboard } from '@/services/api.ts';

interface DashboardData {
  stats: {
    totalRevenue: number;
    totalUsers: number;
    engagement: number;
    conversion: number;
  };
  revenue: { month: string; revenue: number }[];
  todos: { id: string; title: string; completed: boolean; priority: string }[];
  usersBySource: { source: string; count: number; percentage: number }[];
  weeklyActivity: { day: string; visits: number }[];
  activityFeed: { id: string; user: string; action: string; timestamp: string }[];
}

type DashboardSuccess = {
  status: 'success';
  data: DashboardData;
};

type DashboardLoading = {
  status: 'loading';
};

type DashboardError = {
  status: 'error';
  error: string;
};

type DashboardState = DashboardLoading | DashboardSuccess | DashboardError;

export function useFetchDashboard(): DashboardState {
  const [state, setState] = useState<DashboardState>({
    status: 'loading',
  });

  useEffect(() => {
    getDashboard()
      .then((res) => {
        setState({
          status: 'success',
          data: res.data,
        });
      })
      .catch((err) => {
        setState({
          status: 'error',
          error: err.message,
        });
      });
  }, []);

  return state;
}
