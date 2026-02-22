import type { Metric, DashboardMetrics, TimeRange } from '@/types/types.ts';
import { useMemo } from 'react';

const RANGE_LABEL: Record<TimeRange, string> = {
  '7D': 'week',
  '30D': 'month',
  '90D': '3 months',
  '1Y': 'year',
};

export const useDashboardMetrics = (metrics: Metric[], timeRange: TimeRange): DashboardMetrics => {
  return useMemo(() => {
    const now = new Date();
    const day = 24 * 60 * 60 * 1000;

    const getStartDate = () => {
      switch (timeRange) {
        case '7D':
          return new Date(now.getTime() - 7 * day);
        case '30D':
          return new Date(now.getTime() - 30 * day);
        case '90D':
          return new Date(now.getTime() - 90 * day);
        case '1Y':
          return new Date(now.getTime() - 365 * day);
        default:
          return new Date(0);
      }
    };

    const startDate = getStartDate();

    const filtered = metrics.filter((item) => new Date(item.date) >= startDate);

    const totalRevenue = filtered.reduce((sum, item) => sum + item.revenue, 0);
    const totalUsers = filtered.reduce((sum, item) => sum + item.users, 0);
    const currentActive = filtered.at(-1)?.active ?? 0;
    const totalConversions = filtered.reduce((sum, item) => sum + item.conversions, 0);

    const engagement =
      totalUsers === 0 ? 0 : Number(((currentActive / totalUsers) * 100).toFixed(1));
    const conversion =
      totalUsers === 0 ? 0 : Number(((totalConversions / totalUsers) * 100).toFixed(2));

    const chartData = filtered.map((item) => ({
      date: item.date,
      revenue: item.revenue,
    }));

    const sorted = [...metrics].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    const periodDays = filtered.length;
    const prevPeriod = sorted.slice(-periodDays * 2, -periodDays);

    const prevRevenue = prevPeriod.reduce((sum, item) => sum + item.revenue, 0);

    const revenueDiffPercent =
      prevRevenue === 0 ? 0 : ((totalRevenue - prevRevenue) / prevRevenue) * 100;

    const revenueComparison =
      revenueDiffPercent >= 0
        ? `+${revenueDiffPercent.toFixed(0)}% than last ${RANGE_LABEL[timeRange]}`
        : `${revenueDiffPercent.toFixed(0)}% than last ${RANGE_LABEL[timeRange]}`;

    return {
      chartData,
      totalRevenue,
      totalUsers,
      currentActive,
      engagement,
      conversion,
      revenueComparison,
    };
  }, [metrics, timeRange]);
};
