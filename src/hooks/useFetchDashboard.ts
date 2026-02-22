import { useState, useEffect } from 'react';
import { getDashboard } from '@/services/api.ts';
import type { DashboardState } from '@/types/types.ts';

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
