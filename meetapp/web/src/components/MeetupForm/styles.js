import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

import 'react-datepicker/dist/react-datepicker.css';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      max-width: 900px;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding-left: 15px;
      color: ${colors.textColor};
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }

    span {
      color: ${colors.btnPrimaryColor};
      font-weight: bold;
    }

    textarea {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;
      resize: none;
      font: 14px 'Roboto', sans-serif;
      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
}))`
  border: 0;
  color: ${colors.textColor};
  background: ${colors.btnPrimaryColor};
  width: 180px;
  height: 42px;
  border-radius: 4px;

  margin-bottom: 50px;

  font-size: 16px;
  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px 0 18px;

  svg {
    padding-right: 10px;
  }

  &:hover {
    background: ${darken(0.03, colors.btnPrimaryColor)};
  }
`;
