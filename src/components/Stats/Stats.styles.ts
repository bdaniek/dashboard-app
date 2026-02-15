import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  height: 300px;
  width: 400px;
  background: linear-gradient(135deg, #ff8c42 0%, #f05aa0 100%);
  border-radius: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UserSection = styled('div')`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex: 1;
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
`;

export const Value = styled('div')`
  color: white;
  font-size: 44px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 1.5px;
  display: flex;
`;

export const Divider = styled('div')`
  position: absolute;
  top: 10%;
  height: 80%;
  width: 2px;
  background-image: repeating-linear-gradient(
    to bottom,
    #fff 0px,
    #fff 2px,
    transparent 2px,
    transparent 4px
  );
  left: 140px;
`;
