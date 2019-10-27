import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';

import BannerInput from '../BannerInput';
import DateTimePicker from '~/components/DateTimePicker';
import { Container, SubmitButton } from '~/components/MeetupForm/styles';

import api from '~/services/api';
import history from '~/services/history';

import { meetupSchema } from '~/utils/validation';

export default function Create() {
  async function handleSubmit(data) {
    try {
      await api.post('/meetups', data);

      toast.success('Meetup criado com sucesso!');

      history.push('/dashboard');
    } catch (error) {
      toast.error(error.response.data.user_message);
    }
  }

  return (
    <Container>
      <Form schema={meetupSchema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />

        <Input name="title" placeholder="Título do meetup" />
        <Input
          name="description"
          placeholder="Descrição do meetup"
          multiline
          rows={10} />
        <DateTimePicker name="date" placeholder="Data do meetup" />
        <Input name="address" placeholder="Localização" />

        <SubmitButton>
          <MdAddCircleOutline color="#fff" size={20} /> Salvar Meetup
        </SubmitButton>
      </Form>
    </Container>
  );
}
