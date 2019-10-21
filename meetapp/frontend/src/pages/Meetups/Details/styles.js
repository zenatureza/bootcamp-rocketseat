import styled from 'styled-components';
import colors from '~/styles/colors';

export const MeetupInfoContainer = styled.div`
  margin-bottom: 10px;
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 300px;
    width: 900px;
    border-radius: 4px;
  }

  footer {
    margin-top: 25px;
    display: flex;
    align-items: left;
    width: 900px;
  }
`;

export const MeetupDescription = styled.strong`
  align-items: left;
  width: 900px;

  margin-top: 25px;
  font-size: 16px;
  color: ${colors.textColor};
  text-align: left;
  display: flex;
`;

export const MeetupDate = styled.strong`
  color: ${colors.placeholderColor};
  display: flex;
  align-items: center;
  margin-right: 25px;

  strong {
    margin-left: 10px;
    font-size: 16px;
  }
`;

export const MeetupAddress = styled.strong`
  color: ${colors.placeholderColor};
  display: flex;
  align-items: center;

  strong {
    margin-left: 10px;
    font-size: 16px;
  }
`;
