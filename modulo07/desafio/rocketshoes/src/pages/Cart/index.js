import React from 'react';
import { connect } from 'react-redux';
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
} from './styles';

function Cart(params) {
  const {
    total,
    cart,
    navigation,
    updateAmountRequest,
    removeFromCart,
  } = params;
  console.tron.log('$ logging params: ');
  console.tron.log(params);

  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <CartBox>
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
                <ProductDelete onPress={() => removeFromCart(product.id)}>
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
    </CartBox>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    // creating a field for each product
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
