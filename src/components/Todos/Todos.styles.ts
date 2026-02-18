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

export const TodoItem = styled('div')`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  border: 1px solid transparent;
  background:
    linear-gradient(${({ theme }) => theme.palette.background.default}) padding-box,
    linear-gradient(135deg, #ff8c42, #f05aa0) border-box;
`;

export const TodoInformation = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const TodoTitle = styled('div')``;

export const TodoPriority = styled('div')`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: 700;
  font-size: 14px;
`;
