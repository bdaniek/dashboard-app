import { useState, useEffect } from 'react';
import { getDashboard } from '@/services/api.ts';
import type { Metric, Transaction } from '@/types/types.ts';

interface DashboardData {
  metrics: Metric[];
  transactions: Transaction[];
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
