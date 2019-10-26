import React from 'react';
import { FlatList } from 'react-native';

export default function MeetupsList({ data, keyExtractor, renderItem }) {
  return (
    <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem} />
  );
}
