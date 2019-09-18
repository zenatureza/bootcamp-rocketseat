import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

// import { connect } from 'react-redux';

import { Container, LogoBox, LogoImage, CartBox, CartCounter } from './styles';

import logo from '../../assets/logo.png';

// function Header({ navigation, cartSize = 0 }) {
export default function Header(params) {
  console.tron.log('> logging navigation');
  console.tron.log(params);
  const { navigation } = params;

  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <LogoBox onPress={() => navigation.navigate('Home')}>
        <LogoImage source={logo} />
      </LogoBox>
      <CartBox onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={25} color="#fff" />
        <CartCounter>{cartSize}</CartCounter>
      </CartBox>
    </Container>
  );
}

// export default connect(state => ({
//   cartSize: state.cart.length,
// }))(Header);

// export default Header;
