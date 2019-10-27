import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import { Alert, FlatList } from 'react-native';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container } from './styles';

import api from '~/services/api';
import { Loading } from '~/components/Loading/styles';
import Meetup from '~/components/Meetup';

function Subscriptions({ isFocused }) {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMeetupsSubscriptions = async () => {
    if (loading) return;

    setLoading(true);
    console.tron.log('loading data from api');

    const response = await api.get('/subscriptions');

    console.tron.log('subscriptions');
    console.tron.log(response.data);

    setMeetups(
      response.data.map(subscription => {
        return { ...subscription.Meetup, id: subscription.id };
      })
    );
    setLoading(false);
  };

  // onComponentDidMount
  useEffect(() => {
    if (isFocused) {
      loadMeetupsSubscriptions();
    }
  }, [isFocused]);

  // after unsubscription
  async function handleUnsubscription(subscriptionId) {
    try {
      await api.delete(`/meetups/${subscriptionId}/subscriptions`);

      Alert.alert('Desinscrição realizada com sucesso!');

      loadMeetupsSubscriptions();
    } catch (error) {
      Alert.alert(error.response.data.user_message);
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        <FlatList
          data={meetups}
          contentContainerStyle={{ paddingBottom: 100 }}
          keyExtractor={item => String(item.id)}
          ListFooterComponent={loading && <Loading />}
          renderItem={({ item }) => (
            <Meetup
              data={item}
              buttonText="Cancelar inscrição"
              buttonFunction={handleUnsubscription}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
