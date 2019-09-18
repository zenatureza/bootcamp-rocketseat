import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  // getting cartsize through react hooks
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

// // * 'state =>' is the entire redux state
// // * 'state =>' is returning an object
// export default connect(state => ({
//   // * accessing 'cart' reducer through redux state
//   // * 'cart' is defined inside rootReducer
//   /* after 'ADD_TO_CART' action was dispatched,
//   the state.cart was modified. Redux re-render
//   every component using state.cart with its new state.
//   */
//   cartSize: state.cart.length,
// }))(Header);
