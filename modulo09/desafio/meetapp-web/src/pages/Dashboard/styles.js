import styled from 'styled-components';

import { darken } from 'polished';

export const TitleContainer = styled.div`
  margin: 50px auto;
  width: 900px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 32px;
    color: #fff;
  }

  button {
    border: 0;
    color: #fff;
    background: #d44059;
    border-radius: 4px;
    align-content: center;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      background: ${darken(0.03, '#d44059')};
    }
  }
`;

export const MeetupsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 900px;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }
`;
