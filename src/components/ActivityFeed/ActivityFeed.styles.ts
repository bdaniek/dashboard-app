import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  height: 100%;
  width: 400px;
  border-radius: 30px;
  padding: 20px 30px;
  box-sizing: border-box;
  border: 1px solid transparent;
  background:
    linear-gradient(${({ theme }) => theme.palette.background.paper}) padding-box,
    linear-gradient(135deg, #ff8c42, #f05aa0) border-box;
`;

export const Title = styled('div')`
  font-size: 30px;
  font-weight: 700;
  height: 50px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const ListContainer = styled('div')`
  height: 240px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  overflow-y: scroll;
  border-bottom: 1px solid transparent;
  background:
    linear-gradient(${({ theme }) => theme.palette.background.paper}) padding-box,
    linear-gradient(135deg, #ff8c42, #f05aa0) border-box;
`;

export const ActivityItem = styled('div')`
  padding: 14px 16px;
  width: 100%;
  border: 1px solid transparent;
  background:
    linear-gradient(${({ theme }) => theme.palette.background.default}) padding-box,
    linear-gradient(135deg, #ff8c42, #f05aa0) border-box;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled('div')`
  display: flex;
  align-items: center;
  gap: 6px;
`;

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

export const UserAvatar = styled('div')`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
