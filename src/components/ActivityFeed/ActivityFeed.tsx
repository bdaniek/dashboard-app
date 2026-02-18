import {
  Wrapper,
  ListContainer,
  Title,
  ActivityItem,
  Timestamp,
  Info,
  LoaderContainer,
  UserAvatar,
} from '@/components/ActivityFeed/ActivityFeed.styles.ts';
import { CircularProgress } from '@mui/material';
import { useActivityFeed } from '@/hooks/useActivityFeed.ts';

export interface ActivityItem {
  id: string;
  user: string;
  action: string;
  timestamp: Date;
  color: string;
}

const ActivityFeed = () => {
  const { activities, loading, sentryRef, hasNextPage } = useActivityFeed();

  return (
    <Wrapper>
      <Title>Activity Feed</Title>
      <ListContainer>
        {activities.map(({ id, user, action, color, timestampText }) => (
          <ActivityItem key={id}>
            <Info>
              <UserAvatar style={{ background: color }}>{user[0]}</UserAvatar> <b>{user}</b>{' '}
              {action}
            </Info>
            <Timestamp>{timestampText}</Timestamp>
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
