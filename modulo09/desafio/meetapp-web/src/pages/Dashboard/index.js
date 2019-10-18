import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { TitleContainer, MeetupsListContainer, MeetupCard } from './styles';

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
  }, [meetups]);

  function handleNewMeetup() {
    history.push('/newedit');
  }

  return (
    <>
      <TitleContainer>
        <h1>Meus meetups</h1>
        <button type="button" onClick={handleNewMeetup}>
          <MdAddCircleOutline /> Novo meetup
        </button>
      </TitleContainer>

      <MeetupsListContainer>
        <ul>
          {meetups.map(item => (
            <MeetupCard key={item.id}>
              <strong>{item.title}</strong>
              <aside>
                <strong>{item.date}</strong>
                <Link to={`/details/${item.id}`}>
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
