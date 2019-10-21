import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const TitleContainer = styled.div`
  margin: 50px auto;
  width: 900px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 32px;
    color: ${colors.textColor};
  }

  /* TODO: Melhorar estilização aqui */
  button {
    border: 0;
    color: ${colors.textColor};
    background: ${colors.btnPrimaryColor};
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 18px 0 18px;

    &:hover {
      background: ${darken(0.03, colors.btnPrimaryColor)};
    }
  }
`;

export const MeetupsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    width: 900px;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 62px;
    padding: 0 15px;
    margin: 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    strong {
      color: ${colors.textColor};
    }

    aside {
      display: flex;
      align-items: center;

      strong {
        color: ${colors.placeholderColor};
        font-size: 16px;
        margin-right: 30px;
      }
    }
  }
`;

export const MeetupCard = styled.li``;
