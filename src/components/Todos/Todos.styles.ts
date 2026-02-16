import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  height: 300px;
  width: 400px;
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 30px;
  padding: 20px 30px;
  box-sizing: border-box;
`;

export const Title = styled('div')`
  font-size: 30px;
  font-weight: 700;
  height: 45px;
`;

export const ListContainer = styled('div')`
  height: 225px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  overflow-y: scroll;
`;

export const TodoItem = styled('div')`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  background: ${({ theme }) => theme.palette.background.default};
`;

export const TodoInformation = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const TodoTitle = styled('div')``;

export const TodoPriority = styled('div')`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 14px;
`;
