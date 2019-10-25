import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: ${colors.textColor};
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 10px 0 20px;
    }
  }
`;

export const SubmitButton = styled.button`
  border: 0;
  color: ${colors.textColor};
  background: ${colors.btnPrimaryColor};
  width: 162px;
  height: 42px;
  border-radius: 4px;
  padding: 0 25px;
  justify-content: space-between;
  align-content: center;
  display: flex;
  flex-grow: 1;
  margin-left: auto;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background: ${darken(0.03, colors.btnPrimaryColor)};
  }
`;
