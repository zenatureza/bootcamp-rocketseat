import styled from 'styled-components';

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

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 132px;
      resize: none;
      width: 100%;
      margin: 0 0 10px;
      color: #fff;
      padding: 15px;
      font: 14px 'Roboto', sans-serif;

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }
`;

export const SubmitButton = styled.button`
  border: 0;
  color: #fff;
  background: #d44059;
  width: 180px;
  height: 42px;
  border-radius: 4px;
  justify-content: flex-end;
  margin-left: auto;
`;

// TODO: Ajustar largura do datetime picker
// export const DatePicker = styled(ReactDatePicker)`
//   width: 900px;
// `;
