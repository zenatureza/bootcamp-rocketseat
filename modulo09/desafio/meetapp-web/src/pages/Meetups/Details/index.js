import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever, MdEdit, MdLocationOn, MdToday } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import pt from 'date-fns/locale/pt';


import {
  TitleContainer,
  TitleButton,
} from '~/components/TitleContainer/styles';
import {
  MeetupInfoContainer,
  MeetupDescription,
  MeetupDate,
  MeetupAddress,
} from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Details({ match }) {
  const { id } = match.params;

  const [meetup, setMeetup] = useState({});

  // TODO: Tratar servidor offline
  useEffect(() => {
    async function loadMeetupData() {
      try {
        const response = await api.get(`/meetups/${id}`);

        const meetupData = {
          ...response.data,
          date: format(
            parseISO(response.data.date),
            "dd 'de' MMMM', às' HH'h'",
            {
              locale: pt,
            }
          ),
        };

        setMeetup(meetupData);
      } catch (error) {
        toast.error('Não foi possível obter os dados do meetup!');
      }
    }

    loadMeetupData();
  }, [id]);

  function handleEdit() {
    history.push(`/meetups/${id}/edit`);
  }

  async function handleCancel() {
    try {
      confirmAlert({
        title: 'Excluir meetup',
        message: 'Tem certeza que quer excluir este meetup?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
              await api.delete(`/meetups/${id}`);

              toast.success('Meetup excluído com sucesso!');

              history.push('/dashboard');
            }
          },
          {
            label: 'Não',
            onClick: () => {
              console.tron.log('not excluding!');
            }
          }
        ]
      });
    } catch (error) {
      toast.error('Não foi possível excluir o meetup!');
    }
  }

  return (
    <>
      <TitleContainer>
        <h1>{meetup.title}</h1>
        <aside>
          <TitleButton type="button" editbtn onClick={handleEdit}>
            <MdEdit /> Editar
          </TitleButton>
          <TitleButton type="button" onClick={handleCancel}>
            <MdDeleteForever /> Cancelar
          </TitleButton>
        </aside>
      </TitleContainer>

      <MeetupInfoContainer>
        <img src={meetup.banner && meetup.banner.url} alt="Banner" />
        <MeetupDescription>{meetup.description}</MeetupDescription>

        <footer>
          <MeetupDate>
            <MdToday /> <strong>{meetup.date}</strong>
          </MeetupDate>

          <MeetupAddress>
            <MdLocationOn /> <strong>{meetup.address}</strong>
          </MeetupAddress>
        </footer>
      </MeetupInfoContainer>
    </>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }),
  }).isRequired,
};
