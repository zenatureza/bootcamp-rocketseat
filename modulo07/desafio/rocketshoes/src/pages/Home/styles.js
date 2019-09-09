import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const ProductsList = styled.FlatList`
  background: #191920;
`;

export const ProductBox = styled.View`
  background: #f00;
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
