import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container, SubmitButton } from './styles';
import DateTimePicker from '~/components/DateTimePicker';
import MeetupBannerInput from './MeetupBannerInput';

export default function NewEdit() {
  const [meetup, setMeetup] = useState({});
  // const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());

  function handleSubmit(data) {
    // dispatch(updateMeetup());
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <MeetupBannerInput name="banner" placeholder="" />

        <Input name="name" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <DateTimePicker
          // name={meetupDate}
          // selected={currentDate}
          // onChange={date => setCurrentDate(date)}
          name="meetupDate"
          placeholder="Data do Meetup"
        // ref={ref}
        />
        <Input name="address" placeholder="Localização" />
        <SubmitButton type="submit" onClick={handleSubmit}>
          <MdAddCircleOutline /> Salvar Meetup
        </SubmitButton>
      </Form>
    </Container>
  );
}
