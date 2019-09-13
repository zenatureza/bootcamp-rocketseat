import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const CartBox = styled.View`
  background: #ffffff;
  border-radius: 4px;
  margin: 15px;
  padding: 10px;
`;

export const ProductsContainer = styled.View``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductActionsAndFinalPrice = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductIncrementDecrement = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #ffffffff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const ProductSubtotal = styled.Text`
  font-weight: bold;
  text-align: right;
  flex: 1;
`;

export const TotalBox = styled.View`
  margin: 30px;
`;

export const TotalTitle = styled.Text`
  font-weight: bold;
  color: #999;
  text-align: center;
`;

export const TotalValue = styled.Text`
  color: #000;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
`;

export const DoneButton = styled(RectButton)`
  background: #7159c1;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 12px;
  border-radius: 4px;
`;

export const DoneText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
