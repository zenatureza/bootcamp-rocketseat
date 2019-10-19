import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

import {
  TitleContainer,
  TitleButton,
} from '~/components/TitleContainer/styles';

import api from '~/services/api';

export default function Details({ match }) {
  const { id } = match.params;

  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetupData() {
      const response = await api.get(`/meetups/${id}`);

      const { title, description, address, date, banner } = response.data;
      const meetupData = {
        title,
        description,
        banner,
        address,
        date: format(parseISO(date), "dd 'de' MMMM', às' HH'h'", {
          locale: pt,
        }),
      };

      setMeetup(meetupData);
    }

    loadMeetupData();
  }, [id]);

  return (
    <TitleContainer>
      <h1>{meetup.title}</h1>
      <aside>
        <TitleButton type="button" editbtn>
          <MdEdit /> Editar
        </TitleButton>
        <TitleButton type="button">
          <MdDeleteForever /> Cancelar
        </TitleButton>
      </aside>
    </TitleContainer>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }),
  }).isRequired,
};
