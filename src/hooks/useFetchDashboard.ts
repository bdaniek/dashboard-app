import { useState, useEffect } from 'react';
import { getDashboard } from '@/services/api.ts';

interface DashboardData {
  stats: {
    totalRevenue: number;
    totalUsers: number;
    currentActive: number;
    engagement: number;
    conversion: number;
  };
  revenue: { month: string; revenue: number }[];
  todos: { id: string; title: string; priority: string; assignedTo: string }[];
  usersBySource: { source: string; count: number; percentage: number }[];
  weeklyActivity: { day: string; visits: number }[];
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

export const useFetchDashboard = (): DashboardState => {
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
};
