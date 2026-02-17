import {
  Wrapper,
  ListContainer,
  Title,
  ActivityItem,
  Timestamp,
  Info,
  LoaderContainer,
} from '@/components/ActivityFeed/ActivityFeed.styles.ts';
import { CircularProgress } from '@mui/material';
import { useActivityFeed } from '@/hooks/useActivityFeed.ts';

export interface ActivityItem {
  id: string;
  user: string;
  action: string;
  timestamp: string;
}

const ActivityFeed = () => {
  const { activities, loading, sentryRef, hasNextPage } = useActivityFeed();

  return (
    <Wrapper>
      <Title>Activity Feed</Title>
      <ListContainer>
        {activities.map((item) => (
          <ActivityItem key={item.id}>
            <Info>
              <b>{item.user}</b> {item.action}
            </Info>
            <Timestamp>{item.timestamp}</Timestamp>
          </ActivityItem>
        ))}

        {hasNextPage && (
          <LoaderContainer ref={sentryRef}>
            {loading && <CircularProgress sx={{ color: '#fff' }} />}
          </LoaderContainer>
        )}
      </ListContainer>
    </Wrapper>
  );
};

export default ActivityFeed;
