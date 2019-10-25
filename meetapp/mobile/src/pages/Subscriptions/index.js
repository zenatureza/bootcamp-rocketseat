import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

import { withNavigationFocus } from 'react-navigation';
import Background from '~/components/Background';

function Subscriptions() {
  return <Background />;
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
