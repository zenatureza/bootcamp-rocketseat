import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Dashboard() {
  api.get('appointments');
  console.tron.log('> Rendering dashboard');

  return (
    <>
      <h1>Dashboard</h1>
      <h2>teste</h2>
    </>
  );
}
