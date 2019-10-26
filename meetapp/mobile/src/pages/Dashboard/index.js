import React, { useEffect, useState, useMemo } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';
import MeetupsList from '~/components/MeetupsList';

import {
  DateContainer,
  DateText,
  // MeetupsList,
  MdChevronLeft,
  MdChevronRight,
} from './styles';

import api from '~/services/api';
import colors from '~/styles/colors';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  async function loadMeetups(date) {
    const response = await api.get('/meetups', {
      params: { date },
    });

    console.tron.log(response.data);

    setMeetups(response.data);
  }

  useEffect(() => {
    loadMeetups(date);
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  async function handleSubscription(meetupId) {
    await api.post(`/meetups/${meetupId}/subscriptions`);
  }

  return (
    <Background>
      <Header />

      <DateContainer>
        <MdChevronLeft onPress={handlePrevDay}>
          <Icon name="chevron-left" color={colors.textColor} size={30} />
        </MdChevronLeft>
        <DateText>{dateFormatted}</DateText>
        <MdChevronRight onPress={handleNextDay}>
          <Icon name="chevron-right" color={colors.textColor} size={30} />
        </MdChevronRight>
      </DateContainer>

      <MeetupsList
        data={meetups}
        keyExtractor={item => String(item.id)}
        onEndReached={() => loadMeetups(date)}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <Meetup
            data={item}
            buttonText="Realizar inscrição"
            buttonFunction={handleSubscription}
          />
        )}
      />
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
