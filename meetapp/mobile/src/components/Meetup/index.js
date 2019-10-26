import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';

import colors from '~/styles/colors';

import {
  Container,
  Banner,
  Title,
  CardButton,
  CardButtonText,
  InfoContainer,
  InfoText,
} from './styles';

export default function Meetup({ data, buttonText, buttonFunction }) {
  const formattedDate = format(parseISO(data.date), "d 'de' MMMM, 'às' HH'h'", {
    locale: pt,
  });

  return (
    <Container>
      <Banner
        source={{
          uri: data.banner.url,
        }}
      />
      <Title>{data.title}</Title>

      <InfoContainer>
        <Icon name="today" size={16} color="#999" />
        <InfoText>{formattedDate}</InfoText>
      </InfoContainer>

      <InfoContainer>
        <Icon name="location-on" size={16} color="#999" />
        <InfoText>{data.address}</InfoText>
      </InfoContainer>

      <InfoContainer>
        <Icon name="person" size={16} color="#999" />
        <InfoText>Organizador(a): {data.user.name}</InfoText>
      </InfoContainer>

      <CardButton
        bgColor={colors.btnPrimaryColor}
        onPress={() => buttonFunction(data.id)}
      >
        <CardButtonText>{buttonText}</CardButtonText>
      </CardButton>
    </Container>
  );
}
