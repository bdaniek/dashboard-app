import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

export const Container = styled('div')`
  height: 45%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 20px 40px;
`;

export const LoaderContainer = styled('div')`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorContainer = styled('div')`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
