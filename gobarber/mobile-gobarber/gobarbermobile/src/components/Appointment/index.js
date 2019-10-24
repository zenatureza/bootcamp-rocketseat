import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import pt from 'date-fns/locale/pt';
import { parseISO, formatRelative } from 'date-fns';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

// TODO: Resolver bug do formatRelative!
export default function Appointment({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    console.tron.log(`date: ${data.date}`);
    console.tron.log(`parseISO: ${parseISO(data.date)}`);
    console.tron.log(`now: ${new Date()}`);

    const dataParsed = formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
    console.tron.log(dataParsed);
    return dataParsed;
  }, [data.date]);

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : `https://api.adorable.io/avatar/50/${data.provider.name}.png`,
          }}
        />

        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
