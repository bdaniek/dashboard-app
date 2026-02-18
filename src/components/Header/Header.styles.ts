import { styled, Button } from '@mui/material';

export const Wrapper = styled('div')`
  height: 10%;
  width: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.palette.text.secondary};
`;

export const DateText = styled('div')`
  background: linear-gradient(135deg, #ff8c42 0%, #ff6b6b 50%, #e91e63 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 30px;
  display: flex;
  gap: 20px;
  opacity: 0.8;
`;

export const TimeContainer = styled('span')`
  width: 120px;
`;

export const LogoutButton = styled(Button)`
  border-radius: 30px;
  width: 160px;
  height: 40px;
`;
