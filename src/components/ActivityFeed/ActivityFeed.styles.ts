import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  height: 100%;
  width: 400px;
  background: linear-gradient(135deg, #ff8c42 0%, #f05aa0 100%);
  border-radius: 30px;
  padding: 20px 30px;
  box-sizing: border-box;
`;

export const Title = styled('div')`
  font-size: 30px;
  font-weight: 700;
  height: 50px;
  color: white;
`;

export const ListContainer = styled('div')`
  height: 240px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  overflow-y: scroll;
`;

export const ActivityItem = styled('div')`
  padding: 16px;
  width: 100%;
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled('div')``;

export const Timestamp = styled('div')`
  font-size: 12px;
`;

export const LoaderContainer = styled('div')`
  width: 100%;
  height: 100%;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
