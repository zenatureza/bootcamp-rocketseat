import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const DateContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const DateText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 30px 0 30px 0;

  color: ${colors.textColor};
`;

export const MeetupsList = styled.FlatList``;

export const MdChevronLeft = styled(RectButton)`
  margin: 10px 10px;
`;

export const MdChevronRight = styled(RectButton)`
  margin: 10px 10px;
`;
