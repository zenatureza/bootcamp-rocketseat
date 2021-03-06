import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  background: ${colors.headerBgColor};
  padding: 0 30px;
  top: 0;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 25px;
    align-content: center;

    strong {
      display: block;
      color: ${colors.textColor};
    }

    a {
      display: block;
      margin-top: 4px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    border: 0;
    color: ${colors.textColor};
    background: ${colors.btnPrimaryColor};;
    width: 71px;
    height: 42px;
    border-radius: 4px;

    &:hover {
      background: ${darken(0.03, colors.btnPrimaryColor)};
    }
  }
`;
