import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container } from './styles';

import api from '~/services/api';
import MeetupsList from '~/components/MeetupsList';
import Meetup from '~/components/Meetup';

function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [meetups, setMeetups] = useState([]);

  async function loadMeetupsSubscriptions() {
    const response = await api.get('/subscriptions');

    console.tron.log('subscriptions');
    console.tron.log(response.data);

    if (response.data) {
      setMeetups(response.data.map(subscription => subscription.Meetup));
    }

    setSubscriptions(response.data);
    // else {
    //   setMeetups([]);
    //   setSubscriptions([]);
    // }
  }

  useEffect(() => {
    loadMeetupsSubscriptions();
  }, [meetups]);

  async function handleUnsubscription(meetupId) {
    await api.delete(`/meetups/${meetupId}/subscriptions`);
    loadMeetupsSubscriptions();
  }

  return (
    <Background>
      <Header />
      <Container>
        <MeetupsList
          data={meetups}
          keyExtractor={item => String(item.id)}
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
