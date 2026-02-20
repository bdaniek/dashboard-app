import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Container = styled('div')`
  display: flex;
  width: 100%;
  overflow: hidden;
  padding: 20px 40px 40px 40px;
  gap: 40px;
`;

export const Main = styled('div')`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Section = styled('div')`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  overflow: hidden;
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
