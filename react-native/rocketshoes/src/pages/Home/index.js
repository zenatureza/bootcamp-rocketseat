// react imports
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

// redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import {
  Container,
  ProductsList,
  ProductImage,
  ProductBox,
  ProductTitle,
  ProductPrice,
  ProductAddButton,
  ProductAmountBox,
  ProductAddText,
  ProductAmountText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.objectOf(PropTypes.number).isRequired,
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    // redux prop 'dispatch'
    const { addToCartRequest } = this.props;

    // fires redux action
    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <ProductsList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ProductBox key={item.id}>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.formattedPrice}</ProductPrice>
              <ProductAddButton onPress={() => this.handleAddProduct(item.id)}>
                <ProductAmountBox>
                  <Icon name="add-shopping-cart" size={20} color="#fff" />
                  <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
                </ProductAmountBox>
                <ProductAddText>ADICIONAR</ProductAddText>
              </ProductAddButton>
            </ProductBox>
          )}
        />
      </Container>
    );
  }
}

/* with this i can access 'addToCart' action
without calling dispatch(actions.actionMethod)
*/
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
