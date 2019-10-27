import React, { useEffect, useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Alert, FlatList } from 'react-native';

import { withNavigationFocus } from 'react-navigation';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';
import { Loading } from '~/components/Loading/styles';

import {
  DateContainer,
  DateText,
  MdChevronLeft,
  MdChevronRight,
} from './styles';

import api from '~/services/api';
import colors from '~/styles/colors';

function Dashboard({ isFocused }) {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [paginationPage, setPaginationPage] = useState(1);
  const [currentMeetupsCount, setCurrentMeetupsCount] = useState(null);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  async function loadMeetups(currentPage = page) {
    console.tron.log('entering loadMeetups');
    console.tron.log(`page: ${currentPage}`);
    if (loading || (currentMeetupsCount && page > currentMeetupsCount)) return;

    setLoading(true);

    try {
      const response = await api.get('meetups', {
        params: { date, page: currentPage },
      });

      const numMeetupsReturned = response.data.meetups.length;
      setCurrentMeetupsCount(numMeetupsReturned);

      /* Se estiver dando refresh, preciso setar os meetups 
      p/ apneas lista recém obtida */
      setMeetups(
        refreshing
          ? [...response.data.meetups]
          : [...meetups, ...response.data.meetups]
      );
      setPaginationPage(response.data.page);
      setPage(currentPage);
    } catch (error) {
      Alert.alert(
        error.response.data.user_message || 'Não foi possível obter os dados!'
      );
    } finally {
      setLoading(false);
    }
  }

  async function refreshMeetups() {
    console.tron.log('refreshing meetups');
    setMeetups([]);
    setRefreshing(true);
    setPage(1);
    await loadMeetups();
    setRefreshing(false);
  }

  useEffect(() => {
    console.tron.log('using effect');
    if (isFocused) {
      // armazeno em qual página parou p/ n buscar os dados novamente
      let currentPage = page;
      if (meetups && meetups.length > 0) {
        currentPage = page + 1;
      }
      loadMeetups(currentPage);
    }
  }, [isFocused, date]);

  function handlePrevDay() {
    setPage(1);
    setDate(subDays(date, 1));
    setMeetups([]);
  }

  function handleNextDay() {
    setPage(1);
    setDate(addDays(date, 1));
    setMeetups([]);
  }

  async function handleSubscription(meetupId) {
    try {
      await api.post(`/meetups/${meetupId}/subscriptions`);
      Alert.alert('Inscrição no meetup realizada com sucesso!');
    } catch (error) {
      console.tron.log('handleSubscription');
      console.tron.log(error.response);

      Alert.alert(error.response.data.user_message);
    }
  }

  async function handleLoadMore() {
    console.tron.log(
      `handleLoadMore: page: ${page} - paginationPage: ${paginationPage}`
    );

    if (page === paginationPage) return;

    const currentPage = page + 1;
    await loadMeetups(currentPage);
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

      <FlatList
        data={meetups}
        keyExtractor={item => String(item.id)}
        onEndReached={() => handleLoadMore()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshMeetups}
        refreshing={refreshing}
        ListFooterComponent={loading && <Loading />}
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

export default withNavigationFocus(Dashboard);
