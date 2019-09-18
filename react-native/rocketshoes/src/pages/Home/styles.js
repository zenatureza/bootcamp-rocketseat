import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const ProductsList = styled.FlatList`
  background: #191920;
`;

export const ProductBox = styled.View`
  background: #ffffff;
  border-radius: 4px;
  width: 220px;
  height: 358px;
  margin: 20px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const ProductAddButton = styled(RectButton)`
  background: #7159c1;
  border-radius: 4px;
  align-items: center;
  flex-direction: row;
  margin-top: auto;
`;

export const ProductAmountBox = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${darken(0.03, '#7159c1')};
  padding: 12px;
`;

export const ProductAmountText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  margin: 0px 4px 0px 10px;
`;

export const ProductAddText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;
