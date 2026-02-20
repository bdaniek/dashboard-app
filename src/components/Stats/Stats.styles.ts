import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  height: 100%;
  width: 400px;
  background: linear-gradient(135deg, #ff8c42 0%, #f05aa0 100%);
  border-radius: 24px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.16),
    0 6px 16px rgba(0, 0, 0, 0.1);
`;

export const UserSection = styled('div')`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const PerformanceSection = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const RevenueSection = styled('div')``;

export const MetricBlock = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled('div')`
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

export const Value = styled('div')`
  color: white;
  font-size: 44px;
  font-weight: 700;
  line-height: 50px;
  display: flex;
`;

export const Comparison = styled('div')<{ isPositive: boolean }>``;

export const Divider = styled('div')`
  height: 80px;
  width: 2px;
  background-image: repeating-linear-gradient(
    to bottom,
    #fff 0px,
    #fff 2px,
    transparent 2px,
    transparent 4px
  );
`;
