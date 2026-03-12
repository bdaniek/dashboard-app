import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  height: 100%;
  min-height: 320px;
  min-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled('div')`
  font-weight: 700;
`;

export const LoaderContainer = styled('div')`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
