import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default class Home extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
    ],
  };

  render() {
    const { products } = this.state;

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
              <ProductPrice>{item.price}</ProductPrice>
              <ProductAddButton>
                <ProductAmountBox>
                  <Icon name="add-shopping-cart" size={20} color="#fff" />
                  <ProductAmountText>12</ProductAmountText>
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
