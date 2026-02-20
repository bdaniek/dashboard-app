import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.palette.text.secondary};
  border-radius: 24px;
  background: ${({ theme }) => theme.palette.background.paper};
  padding: 20px;
`;

export const Title = styled('div')`
  font-size: 30px;
  text-align: center;
  font-weight: 300;
`;
