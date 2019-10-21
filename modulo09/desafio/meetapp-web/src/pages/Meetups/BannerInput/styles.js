import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 10px;
  width: 100%;

  label {
    cursor: pointer;

    input {
      display: none;
    }

    img {
      height: 300px;
      width: 900px;
      border-radius: 4px;
    }

    div {
      background: rgba(0, 0, 0, 0.3);
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      strong {
        margin-top: 4px;
        font-size: 18px;
        font-weight: bold;
        color: #999;
      }
    }
  }
`;
