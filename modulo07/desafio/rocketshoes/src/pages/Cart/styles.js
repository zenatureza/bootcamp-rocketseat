import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const CartBox = styled.View`
  background: #ffffff;
  border-radius: 4px;
  margin: 15px;
  padding: 10px;
`;

export const ProductsContainer = styled.View``;

export const ProductInfo = styled.View``;

export const ProductImage = styled.Image``;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text``;

export const ProductAmount = styled.Text``;

export const ProductFinalPrice = styled.Text``;

export const Total = styled.Text``;

export const Done = styled(RectButton)`
  background: #7159c1;
  color: #fff;
  text-align: center;
  justify-content: center;
`;
