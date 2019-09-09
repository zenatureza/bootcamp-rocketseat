import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, LogoBox, LogoImage, CartBox, CartCounter } from './styles';

import logo from '../../assets/logo.png';

function Header({ navigation }) {
  return (
    <Container>
      <LogoBox onPress={() => navigation.navigate('Home')}>
        <LogoImage source={logo} />
      </LogoBox>
      <CartBox onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={25} color="#fff" />
        <CartCounter>{5}</CartCounter>
      </CartBox>
    </Container>
  );
}

export default Header;
