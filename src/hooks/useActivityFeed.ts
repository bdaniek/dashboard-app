import { useCallback, useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import type { ActivityItem } from '@/components/ActivityFeed/ActivityFeed';

const USERS = ['John', 'Anna', 'Mike', 'Kate', 'Tom', 'Sara'];
const ACTIONS = [
  'logged in',
  'uploaded a file',
  'deleted a task',
  'created a project',
  'commented',
];

const BATCH_SIZE = 10;
const MAX_ITEMS = 100;

const generateRandomActivity = (): ActivityItem => ({
  id: crypto.randomUUID(),
  user: USERS[Math.floor(Math.random() * USERS.length)],
  action: ACTIONS[Math.floor(Math.random() * ACTIONS.length)],
  timestamp: new Date().toLocaleTimeString(),
});

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

  return { activities, loading, hasNextPage, sentryRef };
};
