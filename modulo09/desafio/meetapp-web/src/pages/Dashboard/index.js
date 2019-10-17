import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

import { TitleContainer, MeetupsListContainer } from './styles';

export default function Dashboard() {
  return (
    <>
      <TitleContainer>
        <h1>Meus meetups</h1>
        <button type="button">
          <MdAddCircleOutline /> Novo meetup
        </button>
      </TitleContainer>

      <MeetupsListContainer>
        <ul>
          <li>
            <input type="text" value="Meetup de React Native" />
          </li>
          <li>
            <input type="text" value="NodeJs Meetup" />
          </li>
          <li>
            <input type="text" value="React on the house" />
          </li>
        </ul>
      </MeetupsListContainer>
    </>
  );
}
