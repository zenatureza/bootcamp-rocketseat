import styled from 'styled-components/native';

export const Container = styled.View`
  background: #141419;
  flex-direction: row;
  padding: 40px;
  justify-content: space-between;
`;

export const LogoBox = styled.TouchableOpacity`
  position: absolute;
  background: #fff;
`;

export const LogoImage = styled.Image`
  position: absolute;
  width: 185px;
  height: 24px;
  left: 20px;
  top: 40px;
`;

export const CartBox = styled.TouchableOpacity`
  position: absolute;
  width: 24px;
  height: 26px;
  margin-left: 321px;
  margin-top: 40px;
`;

export const CartCounter = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 10px;
  overflow: hidden;
`;
