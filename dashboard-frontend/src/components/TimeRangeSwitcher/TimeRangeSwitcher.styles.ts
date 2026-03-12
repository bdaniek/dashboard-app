import { styled } from '@mui/material';

export const Wrapper = styled('div')<{ isMobile: boolean }>`
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 24px;
  gap: 8px;
  width: fit-content;
  margin: 10px 40px 0 40px;

  ${({ isMobile }) =>
    isMobile &&
    `
      margin: 10px auto 0 auto;
  `}
`;

export const RangeButton = styled('button')<{ isSelected?: boolean }>`
  border: none;
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.palette.primary.main : 'transparent'};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.palette.primary.contrastText : theme.palette.text.primary};
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ isSelected, theme }) =>
      isSelected ? theme.palette.primary.main : theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
