import { styled, keyframes } from '@mui/material';
import theme from '@/utils/theme.ts';

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled('div')`
  height: 100%;
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid transparent;
  background:
    linear-gradient(${({ theme }) => theme.palette.background.paper}) padding-box,
    linear-gradient(135deg, #ff8c42, #f05aa0) border-box;
  border-radius: 24px;
`;

export const Title = styled('div')`
  padding: 20px 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  font-size: 22px;
  font-weight: 600;
`;

export const ScrollContainer = styled('div')`
  flex: 1;
  overflow-y: auto;
  padding: 0 32px;

  scrollbar-width: thin;
`;

export const TransactionItem = styled('div')<{ index: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};

  transition: all 200ms ease;
  opacity: 0;
  animation: ${fadeSlideIn} 400ms ease forwards;
  animation-delay: ${({ index }) => (index % 8) * 0.03}s;

  &:hover {
    background: ${({ theme }) => theme.palette.action.hover};
  }
`;

export const Left = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Username = styled('span')`
  font-weight: 600;
  font-size: 15px;
`;

export const Label = styled('span')`
  font-size: 13px;
  color: ${({ theme }) => theme.palette.text.secondary};
  display: flex;
  justify-content: center;
`;

export const StateWrapper = styled('div')`
  font-size: 13px;
  color: ${({ theme }) => theme.palette.text.secondary};
  display: flex;
  justify-content: center;
  padding: 20px 0;
  text-align: center;
`;

export const Right = styled('div')`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Amount = styled('span')`
  font-size: 16px;
  font-weight: 700;
`;

export const Status = styled('span')`
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${theme.palette.success.light};
  color: ${theme.palette.success.dark};
`;
