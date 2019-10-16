import React from 'react';
import ReactDatePicker from 'react-datepicker';

import { Container } from './styles';

export default function DateTimePicker({ name, placeholder }) {
  return (
    <Container>
      <ReactDatePicker name={name} placeholderText={placeholder} />
    </Container>
  );
}
