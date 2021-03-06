import React from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import {
  CartBox,
  ProductsContainer,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductActionsAndFinalPrice,
  ProductAmount,
  ProductIncrementDecrement,
  ProductSubtotal,
  TotalBox,
  TotalTitle,
  TotalValue,
  DoneButton,
  DoneText,
  CartIsEmptyBox,
  CartIsEmptyText,
} from './styles';

export default function Cart(params) {
  // const {
  //   total,
  //   cart,
  //   navigation,
  //   updateAmountRequest,
  //   removeFromCart,
  // } = params;
  // console.tron.log('$ logging params: ');
  // console.tron.log(params);
  const total = useSelector(state =>
    formatPrice(state.cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount;
    }, 0)));

  const cart = useSelector(state => state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })));

  const dispatch = useDispatch();

  function increment(product) {
    // updateAmountRequest(product.id, product.amount + 1);
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product) {
    // updateAmountRequest(product.id, product.amount - 1);
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <CartBox>
      {cart.length && cart.length > 0 ? (
        <>
          <ProductsContainer>
            {cart.map(product => (
              <Product key={String(product.id)}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.formattedPrice}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete onPress={() => dispatch(CartActions.removeFromCart(product.id))}>
                    <Icon name="delete-forever" size={25} color="#7159c1" />
                  </ProductDelete>
                </ProductInfo>

                <ProductActionsAndFinalPrice>
                  <ProductIncrementDecrement onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </ProductIncrementDecrement>
                  <ProductAmount value={String(product.amount)} />
                  <ProductIncrementDecrement onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </ProductIncrementDecrement>
                  <ProductSubtotal>{product.subtotal}</ProductSubtotal>
                </ProductActionsAndFinalPrice>
              </Product>
            ))}
          </ProductsContainer>
          <TotalBox>
            <TotalTitle>TOTAL</TotalTitle>
            <TotalValue>{total}</TotalValue>
            <DoneButton>
              <DoneText>FINALIZAR PEDIDO</DoneText>
            </DoneButton>
          </TotalBox>
        </>
      ) : (
          <CartIsEmptyBox>
            <Icon name="remove-shopping-cart" size={64} color="#eee" />
            <CartIsEmptyText>Seu carrinho está vazio!</CartIsEmptyText>
          </CartIsEmptyBox>
        )}
    </CartBox>
  );
}

// const mapStateToProps = state => ({
//   cart: state.cart.map(product => ({
//     // creating a field for each product
//     ...product,
//     subtotal: formatPrice(product.price * product.amount),
//   })),
//   total: formatPrice(
//     state.cart.reduce((total, product) => {
//       return total + product.price * product.amount;
//     }, 0)
//   ),
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CartActions, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Cart);
