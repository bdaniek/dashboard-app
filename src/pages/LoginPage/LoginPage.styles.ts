import { styled, TextField, Button as ButtonMUI } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  height: 100vh;
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

export const Button = styled(ButtonMUI)`
  border-radius: 20px;
`;

export const InputWrapper = styled('div')``;

export const StyledInput = styled(TextField)``;

export const Information = styled('div')`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
