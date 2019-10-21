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

  aside {
    display: flex;
    flex-direction: row;
  }
`;

export const TitleButton = styled.button`
  background: ${props => (props.editbtn ? '#4DBAF9' : '#d44059')};
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px 0 18px;
  margin-right: ${props => (props.editbtn ? '15px' : '0px')};

  svg {
    padding-right: 10px;
  }

  &:hover {
    background: ${darken(0.03, '#d44059')};
  }
`;
