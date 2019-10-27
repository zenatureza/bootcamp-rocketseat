import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '~/styles/colors';

export const Container = styled.View`
  background: ${colors.textColor};

  margin: 0 20px 20px;
  border-radius: 4px;
  height: 350px;
`;

export const Banner = styled.Image`
  height: 150px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin: 15px 15px 5px 15px;
  font-weight: bold;
  color: ${colors.meetupCardTitleColor};
`;

export const CardButton = styled(RectButton)`
  background: ${props => props.bgColor};
  border: 0;
  border-radius: 4px;
  margin: 15px 15px 25px 15px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const CardButtonText = styled.Text`
  color: ${colors.textColor};
  font-size: 16px;
  font-weight: bold;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 15px 5px 15px;
`;

export const InfoText = styled.Text`
  color: ${colors.meetupCardInfoColor};
  margin-left: 5px;
`;
