import { useCallback, useState, useEffect } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import type { ActivityItem } from '@/components/ActivityFeed/ActivityFeed';
import { weeklyActivityColors as colors } from '@/utils/theme.ts';

const users = ['John', 'Anna', 'Mike', 'Kate', 'Tom', 'Sara'];
const actions = [
  'logged in',
  'uploaded a file',
  'deleted a task',
  'created a project',
  'commented',
];

const BATCH_SIZE = 10;
const MAX_ITEMS = 100;

const timeAgo = (date: Date) => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 1) return 'just now';
  if (diffMins === 1) return '1 min ago';
  if (diffMins < 60) return `${diffMins} mins ago`;

  const diffHours = Math.floor(diffMins / 60);
  if (diffHours === 1) return '1 hour ago';
  if (diffHours < 24) return `${diffHours} hours ago`;

  const diffDays = Math.floor(diffHours / 24);
  return diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
};

const generateRandomActivity = (): ActivityItem => {
  const date = new Date();
  return {
    id: crypto.randomUUID(),
    user: users[Math.floor(Math.random() * users.length)],
    action: actions[Math.floor(Math.random() * actions.length)],
    timestamp: date,
    color: colors[Math.floor(Math.random() * colors.length)],
  };
};

export const useActivityFeed = () => {
  const [activities, setActivities] = useState<ActivityItem[]>(() =>
    Array.from({ length: BATCH_SIZE }, generateRandomActivity),
  );

  const [hasNextPage, setHasNextPage] = useState(BATCH_SIZE < MAX_ITEMS);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(() => {
    if (loading || !hasNextPage) return;

    setLoading(true);

    setTimeout(() => {
      setActivities((prev) => {
        const next = [...prev, ...Array.from({ length: BATCH_SIZE }, generateRandomActivity)];

        if (next.length >= MAX_ITEMS) {
          setHasNextPage(false);
        }

        return next.slice(0, MAX_ITEMS);
      });

      setLoading(false);
    }, 600);
  }, [loading, hasNextPage]);

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    rootMargin: '0px 0px 400px 0px',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActivities((prev) => [...prev]);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return {
    activities: activities.map((activity) => ({
      ...activity,
      timestampText: timeAgo(activity.timestamp),
    })),
    loading,
    hasNextPage,
    sentryRef,
  };
};
