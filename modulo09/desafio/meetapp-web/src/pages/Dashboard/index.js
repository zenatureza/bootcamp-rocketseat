import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MeetupsListContainer, MeetupCard } from './styles';
import {
  TitleContainer,
  TitleButton,
} from '~/components/TitleContainer/styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => {
        return {
          id: meetup.id,
          title: meetup.title,
          date: format(parseISO(meetup.date), "dd 'de' MMMM', às' HH'h'", {
            locale: pt,
          }),
        };
      });

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  function handleNewMeetup() {
    history.push('/meetups/newedit');
  }

  return (
    <>
      <TitleContainer>
        <h1>Meus meetups</h1>
        <TitleButton type="button" onClick={handleNewMeetup}>
          <MdAddCircleOutline /> Novo meetup
        </TitleButton>
      </TitleContainer>

      <MeetupsListContainer>
        <ul>
          {meetups.map(meetup => (
            <MeetupCard key={meetup.id}>
              <strong>{meetup.title}</strong>
              <aside>
                <strong>{meetup.date}</strong>
                <Link to={{ pathname: `/meetups/${meetup.id}/details` }}>
                  <MdChevronRight color="#fff" size={24} />
                </Link>
              </aside>
            </MeetupCard>
          ))}
        </ul>
      </MeetupsListContainer>
    </>
  );
}
