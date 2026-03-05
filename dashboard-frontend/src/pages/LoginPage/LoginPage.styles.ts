import { styled, TextField, Button as ButtonMUI } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  height: 100vh;
  overflow: hidden;
`;

export const Container = styled('div')`
  width: 400px;
  border-radius: 30px;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
`;

export const Title = styled('div')`
  font-size: 20px;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
`;

export const LoginButton = styled(ButtonMUI)<{ disabled: boolean }>`
  border-radius: 20px;
  color: ${({ theme }) => theme.palette.text.disabled};
  margin-top: 10px;
  padding: 10px 0;
  height: 46px;

  &:disabled {
    background: lightgray;
  }
`;

export const ErrorContainer = styled('div')<{ isError: boolean }>`
  color: ${({ theme }) => theme.palette.error.main};
  width: 100%;
  text-align: center;
  margin-top: 10px;
  opacity: ${({ isError }) => (isError ? 1 : 0)};
`;

export const StyledInput = styled(TextField)``;

export const Information = styled('div')`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
