import { styled, keyframes } from '@mui/material';

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

export const Wrapper = styled('header')`
  position: absolute;
  top: 0;
  width: 100%;
  background: linear-gradient(135deg, #ff8c42 0%, #ff6b6b 50%, #e91e63 100%);
  padding: 14px 0;
  overflow: hidden;
`;

export const Track = styled('div')`
  display: flex;
  animation: ${scroll} 30s linear infinite;
`;

export const Item = styled('span')`
  display: flex;
  align-items: center;
  padding: 0 50px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.text.disabled};
  white-space: nowrap;
`;
