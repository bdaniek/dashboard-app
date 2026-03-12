import { styled } from '@mui/material';

export const Wrapper = styled('div')<{ isMobile: boolean }>`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 1150px) {
    overflow-y: scroll;
  }
`;

export const Container = styled('div')<{ isMobile: boolean }>`
  display: flex;
  width: 100%;
  overflow: hidden;
  padding: 20px 40px 40px 40px;
  gap: 40px;

  @media (max-width: 1150px) {
    flex-direction: column;
    overflow-y: scroll;
    min-height: fit-content;
  }

  ${({ isMobile }) =>
    isMobile &&
    `
    flex-direction: column;
    padding: 20px;
  `}
`;

export const Main = styled('div')`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Section = styled('div')<{ isMobile?: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  ${({ isMobile }) =>
    isMobile &&
    `
    flex-direction: column;
    flex: 0;
    min-height: fit-content;
    width: 100%:
  `}
`;

export const LoaderContainer = styled('div')`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ErrorContainer = styled('div')`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
