import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import ReactDatePicker from 'react-datepicker';

import { Container } from './styles';

export default function NewEdit() {
  const profile = useSelector(state => state.user.profile);
  // const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());

  function handleSubmit(data) {
    // dispatch(updateMeetup());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <ReactDatePicker
          // name={meetupDate}
          selected={currentDate}
          onChange={date => setCurrentDate(date)}
          // ref={ref}
        />
      </Form>
    </Container>
  );
}
