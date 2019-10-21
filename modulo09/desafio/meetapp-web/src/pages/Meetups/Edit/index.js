import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { Container, SubmitButton } from '~/components/MeetupForm/styles';

import DateTimePicker from '~/components/DateTimePicker';
import BannerInput from '../BannerInput';

import api from '~/services/api';
import history from '~/services/history';

import { meetupSchema } from '~/utils/validation';

export default function Edit({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetupData() {
      try {
        const response = await api.get(`/meetups/${id}`);

        const meetupData = {
          ...response.data,
          date: parseISO(response.data.date),
        };

        setMeetup(meetupData);
      } catch (error) {
        toast.error('Não foi possível obter os dados do meetup!');
      }
    }

    loadMeetupData();
  }, [id]);

  async function handleSubmit(data) {
    try {
      console.tron.log('logging submit data');
      console.tron.log(data);
      await api.put(`/meetups/${id}`, data);

      toast.success('Dados do meetup alterados com sucesso!');

      history.push('/dashboard');
    } catch (error) {
      console.tron.log(error);
      toast.error('Não foi possível alterar os dados do meetup!');
    }
  }

  return (
    <Container>
      <Form schema={meetupSchema} initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input
          multiline rows={10}
          name="description"
          placeholder="Descrição completa" />
        <DateTimePicker name="date" placeholder="Data do Meetup" />
        <Input name="address" placeholder="Localização" />
        <SubmitButton>
          <MdAddCircleOutline color="fff" size={20} /> Salvar Meetup
        </SubmitButton>
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
